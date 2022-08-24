const { Router } = require('express');
const UserRouter = require("../routes/UserRouter.js");
const BoxRouter = require("../routes/BoxRouter.js");
const LinkRouter = require("../routes/LinkRouter.js")
const AuthRouter = require("../routes/AuthRouter.js")
const router = Router();


router.use("/user", UserRouter);
router.use("/box", BoxRouter);
router.use("/link", LinkRouter);
router.use("/auth", AuthRouter)

module.exports = router;
