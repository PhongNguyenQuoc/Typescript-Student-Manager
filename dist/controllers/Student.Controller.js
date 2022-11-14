"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getById = exports.remove = exports.update = exports.add = exports.index = void 0;
const Student_Repository_1 = require("../repositories/Student.Repository");
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield Student_Repository_1.getData;
        return res.json(student);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.index = index;
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, Student_Repository_1.addStudent)(req.body);
        return res.status(200).json("create succesful");
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.add = add;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield (0, Student_Repository_1.getStudentById)(parseInt(req.params.id));
        if (!student)
            return res.status(404).json({ message: "Student does not exits" });
        yield (0, Student_Repository_1.updateStudent)(req.body, parseInt(req.params.id));
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield (0, Student_Repository_1.getStudentById)(parseInt(req.params.id));
        if (!student)
            return res.status(404).json({ message: "Student does not exits" });
        yield (0, Student_Repository_1.removeStudent)(parseInt(req.params.id));
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.remove = remove;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = yield (0, Student_Repository_1.getStudentById)(parseInt(req.params.id));
        if (!student)
            return res.status(404).json({ message: "Student does not exits" });
        return res.json(student);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.getById = getById;
