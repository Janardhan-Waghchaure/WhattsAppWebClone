const express = require("express");
const Router = express.Router();
const RegisterController = require("../Controllers/RegisterController.js");
const LoginController = require("../Controllers/LoginController.js");
const LogoutController = require("../Controllers/logoutController.js");
const StatusController = require("../Controllers/StatusController.js");

Router.post("/auth/register" , RegisterController);
Router.post("/auth/login" , LoginController);
Router.post("/auth/logout" , LogoutController);
Router.post("/auth/status" , StatusController);



module.exports = Router;