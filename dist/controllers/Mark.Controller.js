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
exports.getById = exports.remove = exports.getAll = exports.update = exports.add = exports.filterByStudent = exports.filterBySubject = void 0;
const Mark_Repository_1 = require("./../repositories/Mark.Repository");
const filterBySubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marks = yield (0, Mark_Repository_1.getMarkBySubject)(parseInt(req.params.id));
        if (!marks)
            return res.status(404).json("This subject has no mark yet");
        return res.json(marks);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.filterBySubject = filterBySubject;
const filterByStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const marks = yield (0, Mark_Repository_1.getMarkByStudent)(parseInt(req.params.id));
        if (!marks)
            return res.status(404).json({ message: "" });
        return res.json(marks);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.filterByStudent = filterByStudent;
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, Mark_Repository_1.addMark)(req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.add = add;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, Mark_Repository_1.updateMark)(req.body, parseInt(req.params.id));
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.update = update;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student_id = req.query.student_id;
        const subject_id = req.query.subject_id;
        if (student_id != null) {
            if (subject_id == null) {
                const marks = yield (0, Mark_Repository_1.getMarkByStudent)(parseInt(student_id));
                if (marks.length == 0)
                    return res.status(404).json({ message: "No data" });
                return res.json(marks);
            }
            else {
                const marks = yield (0, Mark_Repository_1.getMarkByAll)(parseInt(subject_id), parseInt(student_id));
                if (marks.length == 0)
                    return res.status(404).json({ message: "No data" });
                return res.json(marks);
            }
        }
        else {
            const marks = yield (0, Mark_Repository_1.getMarkBySubject)(parseInt(subject_id));
            if (marks.length == 0)
                return res.status(404).json({ message: "No data" });
            return res.json(marks);
        }
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.getAll = getAll;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mark = yield (0, Mark_Repository_1.getMarkById)(parseInt(req.params.id));
        if (!mark)
            return res.status(404).json({ message: "Mark does not exits" });
        yield (0, Mark_Repository_1.removeMark)(parseInt(req.params.id));
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
        const mark = yield (0, Mark_Repository_1.getMarkById)(parseInt(req.params.id));
        if (!mark)
            return res.status(404).json({ message: "Mark does not exits" });
        return res.json(mark);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.getById = getById;
