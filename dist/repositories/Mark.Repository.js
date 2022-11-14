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
exports.getMarkById = exports.removeMark = exports.updateMark = exports.addMark = exports.getMarkByAll = exports.getMarkByStudent = exports.getMarkBySubject = void 0;
const DB_Config_1 = require("../config/DB.Config");
const Mark_1 = require("../entities/Mark");
const markRepository = DB_Config_1.AppDataSource.getRepository(Mark_1.Mark);
const getMarkBySubject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return markRepository.find({
        where: {
            subject: { id }
        }
    });
});
exports.getMarkBySubject = getMarkBySubject;
const getMarkByStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield markRepository.find({
        where: {
            student: { id }
        }
    });
});
exports.getMarkByStudent = getMarkByStudent;
const getMarkByAll = (subjectId, studentId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield markRepository.find({
        where: {
            subject: { id: subjectId },
            student: { id: studentId }
        }
    });
});
exports.getMarkByAll = getMarkByAll;
const addMark = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield markRepository.save(data); });
exports.addMark = addMark;
const updateMark = (data, id) => __awaiter(void 0, void 0, void 0, function* () { return yield markRepository.update(id, data); });
exports.updateMark = updateMark;
const removeMark = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield markRepository.delete(id); });
exports.removeMark = removeMark;
const getMarkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield markRepository.findOne({
        where: {
            id: id
        }
    });
});
exports.getMarkById = getMarkById;
