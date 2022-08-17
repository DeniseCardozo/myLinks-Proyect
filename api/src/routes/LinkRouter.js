const { Router } = require('express');
const { Link } = require("../db.js")
const router = Router();

router.post("/:id_box", async (req, res) => {
    try {
        const {id_box} = req.params;
        const {name, url_link} = req.body;
        let findLink = await Link.findAll({
            where:{
                url_link: url_link
            }
        })
        if(findLink.length > 0) {
            res.status(403).send("Link could not be created, link already in use")
        } else {
            let newLink = await Link.create({
                name,
                url_link,
                id_box: id_box
        });
        newLink ? res.status(200).send("Created Link!") : res.status(400).send("Link not created");
        }
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id_box", async (req, res) => {
    try {
        const {id_box} = req.params;
        const allLinks = await Link.findAll({
            where: {
                id_box: id_box
            }
        })
        allLinks.length > 0 
        ? res.status(200).send(allLinks)
        : res.status(404).send("No Links found")
    } catch (error) {
        console.log(error)
    }
})

router.delete("/:id_link", async (req, res) => {
    try {
        const {id_link} = req.params; 
        const deletedLink = await Link.destroy({
            where: {
                id_link: parseInt(id_link),
            }
        });
        deletedLink === 1 
        ? res.status(200).send({ msg: "Link deleted successfully" })
        : res.status(400).send({ msg: "Link not found" })
    } catch (error) {
        console.log(error)
    }
})

router.put("/:id_link", async (req, res) => {
    try {
        const {id_link} = req.params;
        const {name, url_link} = req.body;

        await Link.update(
            { 
                name,
                url_link
            },
            {
                where: {
                    id_link: id_link
                }, 
            }
        );
        res.status(200).send("Link has been update")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
