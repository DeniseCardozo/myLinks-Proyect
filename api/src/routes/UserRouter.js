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

module.exports = router;
