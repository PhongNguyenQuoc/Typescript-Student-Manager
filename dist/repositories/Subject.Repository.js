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
exports.getSubjectById = exports.updateSubject = exports.removeSubject = exports.addSubject = exports.getData = void 0;
const EnumStatus_1 = require("../utils/EnumStatus");
const DB_Config_1 = require("../config/DB.Config");
const Subject_1 = require("../entities/Subject");
const subjectRepository = DB_Config_1.AppDataSource.getRepository(Subject_1.Subject);
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield subjectRepository.find({
        where: {
            status: EnumStatus_1.Status.ACTIVE,
        }
    });
});
exports.getData = getData;
const addSubject = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield subjectRepository.save(data); });
exports.addSubject = addSubject;
const removeSubject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subjectRepository.update(id, {
        status: EnumStatus_1.Status.INACTIVE
    });
});
exports.removeSubject = removeSubject;
const updateSubject = (data, id) => __awaiter(void 0, void 0, void 0, function* () { return yield subjectRepository.update(id, data); });
exports.updateSubject = updateSubject;
const getSubjectById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield subjectRepository.findOne({
        where: {
            id: id
        }
    });
});
exports.getSubjectById = getSubjectById;
