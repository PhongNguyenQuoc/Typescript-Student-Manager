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
exports.getStudentById = exports.removeStudent = exports.updateStudent = exports.addStudent = exports.filterGetData = exports.getData = void 0;
const EnumStatus_1 = require("../utils//EnumStatus");
const DB_Config_1 = require("../config/DB.Config");
const Student_1 = require("../entities/Student");
const studentRepository = DB_Config_1.AppDataSource.getRepository(Student_1.Student);
const getData = () => __awaiter(void 0, void 0, void 0, function* () { return yield studentRepository.find(); });
exports.getData = getData;
const filterGetData = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentRepository.find({
        where: {
            status: EnumStatus_1.Status.ACTIVE
        }
    });
});
exports.filterGetData = filterGetData;
const addStudent = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield studentRepository.save(data); });
exports.addStudent = addStudent;
const updateStudent = (data, id) => __awaiter(void 0, void 0, void 0, function* () { return yield studentRepository.update(id, data); });
exports.updateStudent = updateStudent;
const removeStudent = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentRepository.update(id, {
        status: EnumStatus_1.Status.INACTIVE
    });
});
exports.removeStudent = removeStudent;
const getStudentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield studentRepository.findOne({
        where: {
            id: id
        }
    });
});
exports.getStudentById = getStudentById;
