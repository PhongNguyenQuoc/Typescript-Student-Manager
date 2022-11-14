import { Status } from "../utils//EnumStatus";
import { AppDataSource } from "../config/DB.Config";
import { Student } from "../entities/Student";

const studentRepository = AppDataSource.getRepository(Student)

export const getData = async () => await studentRepository.find()

export const filterGetData = async () => await studentRepository.find({
    where: {
        status: Status.ACTIVE
    }
});

export const addStudent = async (data: any) => await studentRepository.save(data)

export const updateStudent = async (data: any, id: number) => await studentRepository.update(id,data)

export const removeStudent = async (id: number) => await studentRepository.update(id, {
    status: Status.INACTIVE
})

export const getStudentById = async (id: number) => await studentRepository.findOne({
    where: {
        id: id
    }
})

