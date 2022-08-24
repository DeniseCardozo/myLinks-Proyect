const { Router } = require("express");
const router = Router();
const { User, Box } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res, next) => {
    try {
        const { name, e_mail, password } = req.body;
        const user = await User.findOne({
            where: {
                e_mail: e_mail
            }
        });
        if(user) {
            res.status(403).send("User could not be created, email already in use");
        }
        const hashedPassword = await bcrypt.hash(
            password,
            Number(process.env.SALT_ROUNDS)
        );
        await User.create({
            name,
            e_mail,
            password: hashedPassword
        });
        res.status(201).send("Created!");
        
    } catch (error) {
        return res.status(403).json({ error: "Username or Password invalid" });
    }
});

router.post("/login", async (req, res, next) => {
    try {
        const { e_mail, password } = req.body;
        if(!e_mail || !password) {
            return res.status(400).json({ error: "Email and Password are required" });
        }
        const user = await User.findOne({
            where: {
                e_mail: e_mail
            },
            include: [
                Box
            ]
        })
        if(!user) {
            return res.status(403).json({ error: "Username or Password invalid" });
        }

        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword) {
            return res.status(403).json({ error: "Username or Password invalid" });
        }

        const token = jwt.sign({ user_email: user.e_mail }, process.env.JWT_SECRET)
        
        return res.status(200).json({token: token, user: {...user.dataValues }})

    } catch (error) {
        return res.status(404).send("Error,please try again!");
    }
})

module.exports = router;