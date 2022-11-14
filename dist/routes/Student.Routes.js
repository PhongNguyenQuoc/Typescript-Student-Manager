"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Student_Controller_1 = require("../controllers/Student.Controller");
const router = (0, express_1.Router)();
router.get('/student', Student_Controller_1.index);
router.get('/student/:id', Student_Controller_1.getById);
router.post('/student', Student_Controller_1.add);
router.put('/student/:id', Student_Controller_1.update);
router.delete('/student/:id', Student_Controller_1.remove);
exports.default = router;
