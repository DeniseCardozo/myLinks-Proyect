const { Router } = require('express');
const {User, Box, Link } = require("../db.js")
const router = Router();

router.get("/:id_user", async (req, res) => {
    try {
        const {id_user} = req.params;
        const findUser = await User.findOne({
            attributes: {
                exclude: ["password"],
            },
            where: {
                id_user: parseInt(id_user)
            }, 
            include: [
                Box
            ]
        })
        if (findUser) {
            res.status(200).json(findUser);
        } else {
            res.status(400).json({msg_error: "User not found"})
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post("/", async (req, res, next) => {
    try {
        const {name, e_mail, password} = req.body;
        let findUser = await User.findAll({
            where: {
                e_mail: e_mail
            }
        })
        if(findUser.length > 0){
            res.status(403).send("User could not be created, email already in use");
        } else {
            await User.create({
                name,
                e_mail,
                password
            });
            res.send("Created!");
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;
