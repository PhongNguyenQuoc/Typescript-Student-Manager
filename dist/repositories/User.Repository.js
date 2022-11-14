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
exports.login = exports.getUserById = exports.removeUser = exports.updateUser = exports.addUser = exports.getAll = void 0;
const EnumStatus_1 = require("../utils//EnumStatus");
const DB_Config_1 = require("../config/DB.Config");
const User_1 = require("../entities/User");
const userRepository = DB_Config_1.AppDataSource.getRepository(User_1.User);
/**
 * Get all users
 * @returns
 */
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.find(); });
exports.getAll = getAll;
/**
 * Add a new user
 * @param data
 * @returns
 */
const addUser = (data) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.save(data); });
exports.addUser = addUser;
/**
 * Update a user with id
 * @param data
 * @param id
 * @returns
 */
const updateUser = (data, id) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.update(id, data); });
exports.updateUser = updateUser;
/**
 * Removes a user by id
 * @param id
 * @returns
 */
const removeUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository.update(id, {
        status: EnumStatus_1.Status.INACTIVE
    });
});
exports.removeUser = removeUser;
/**
 * Get a user with id
 * @param id
 * @returns
 */
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () { return yield userRepository.findOneByOrFail({ id: id }); });
exports.getUserById = getUserById;
const login = (username, pwd) => __awaiter(void 0, void 0, void 0, function* () {
    return yield userRepository.findOneOrFail({
        where: {
            user_name: username,
            password: pwd
        }
    });
});
exports.login = login;
