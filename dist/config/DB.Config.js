"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Mark_1 = require("../entities/Mark");
const Student_1 = require("../entities/Student");
const Subject_1 = require("../entities/Subject");
const User_1 = require("../entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '1234567',
    port: 5432,
    database: 'student_manager',
    entities: [User_1.User, Subject_1.Subject, Student_1.Student, Mark_1.Mark],
    logging: true,
    synchronize: true
});
