"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_Controller_1 = require("../controllers/User.Controller");
const CheckJwt_middleware_1 = require("../middlewares/CheckJwt.middleware");
const CheckRole_middleware_1 = require("../middlewares/CheckRole.middleware");
const EnumRoles_1 = require("../utils/EnumRoles");
const router = (0, express_1.Router)();
router.get('/user', [CheckJwt_middleware_1.checkJwt, (0, CheckRole_middleware_1.checkRole)([EnumRoles_1.Roles.ADMMIN])], User_Controller_1.index);
router.get('/user/:id', User_Controller_1.getByID);
router.post('/user', User_Controller_1.add);
router.put('/user/:id', User_Controller_1.update);
//router.delete('/user/:id',del)
router.delete('/user/:id', User_Controller_1.remove);
exports.default = router;
