const { Router } = require('express');
const { Box } = require("../db.js")
const router = Router();

router.post("/:id_user", async (req, res) => {
    try {
        const {id_user} = req.params;
        const {name} = req.body;
        let newBox = await Box.create({
            name,
            id_user: id_user
    });
    newBox ? res.status(200).send("Created Box!") : res.status(400).send("Box not created");
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id_box", async (req, res) => {
    try {
        const {id_box} = req.params; 
        const deletedBox = await Box.destroy({
            where: {
                id_box: parseInt(id_box),
            }
        });
        deletedBox === 1 
        ? res.status(200).send({ msg: "Box deleted successfully" })
        : res.status(400).send({ msg: "Box not found" })
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id_box", async (req, res) => {
    try {
        const {id_box} = req.params;
        const {name} = req.body;

        await Box.update(
            { name },
            {
                where: {
                    id_box: id_box
                }, 
            }
        );
        res.status(200).send("Box has been update")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
