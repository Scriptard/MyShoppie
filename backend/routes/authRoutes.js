const express = require("express");
const authRouter = express.Router();
const authController = require("../controller/auth");
authRouter.post("/auth/register", authController.register);

module.exports = authRouter;
