import { DataSource } from "typeorm"
import { Mark } from "../entities/Mark"
import { Student } from "../entities/Student"
import { Subject } from "../entities/Subject"
import {User} from '../entities/User'

export const AppDataSource = new DataSource ({
    type:'postgres',
    host: 'localhost',
    username:'postgres',
    password:'1234567',
    port:5432,
    database: 'student_manager',
    entities: [User,Subject,Student,Mark],
    logging: true,
    synchronize: true  
}) 