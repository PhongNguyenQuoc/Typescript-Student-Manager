"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_Controller_1 = require("../controllers/Auth.Controller");
const router = (0, express_1.Router)();
router.post('/auth/login', Auth_Controller_1.Login);
exports.default = router;
