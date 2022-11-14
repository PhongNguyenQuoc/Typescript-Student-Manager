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
exports.remove = exports.del = exports.update = exports.add = exports.getByID = exports.index = void 0;
const User_Repository_1 = require("../repositories/User.Repository");
const User_1 = require("./../entities/User");
const User_Repository_2 = require("./../repositories/User.Repository");
/**
 * Get all User in db
 * @param req
 * @param res
 * @returns
 */
const index = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, User_Repository_1.getAll)();
        return res.json(users);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).send();
    }
});
exports.index = index;
/**
 * Get users by id
 * @param req
 * @param res
 * @returns
 */
const getByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, User_Repository_1.getUserById)(parseInt(req.params.id));
        if (!user)
            return res.status(404).json({ message: "User does not exits" });
        return res.status(302).json(user);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.getByID = getByID;
/**
 * Add new user
 * @param req
 * @param res
 * @returns
 */
const add = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, User_Repository_1.addUser)(req.body);
        return res.status(200).json("create succesful");
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.add = add;
/**
 * Update a User
 * @param req
 * @param res
 * @returns
 */
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, User_Repository_1.getUserById)(parseInt(req.params.id));
        if (!user)
            return res.status(404).json({ message: "User does not exits" });
        yield (0, User_Repository_2.updateUser)(req.body, parseInt(req.params.id));
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.update = update;
/**
 * Hard delete User
 * @param req
 * @param res
 * @returns
 */
const del = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, User_Repository_1.getUserById)(parseInt(req.params.id));
        if (!user)
            return res.status(404).json({ message: "User does not exits" });
        yield User_1.User.delete({ id: parseInt(req.params.id) });
        return res.sendStatus(200);
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.del = del;
/**
 * Soft delete by change user's status
 * @param req
 * @param res
 * @returns
 */
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, User_Repository_1.getUserById)(parseInt(req.params.id));
        if (!user)
            return res.status(404).json({ message: "User does not exits" });
        yield (0, User_Repository_1.removeUser)(parseInt(req.params.id));
        return res.status(200).json({ message: "Delete successful" });
    }
    catch (error) {
        if (error instanceof Error)
            return res.status(400).json(error.message);
    }
});
exports.remove = remove;
