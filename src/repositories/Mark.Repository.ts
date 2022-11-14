import { AppDataSource } from "../config/DB.Config";
import { Mark } from "../entities/Mark";

const markRepository = AppDataSource.getRepository(Mark)

export const getMarkBySubject = async (id: number) => markRepository.find({
    where: {
        subject: {id}
    }
})

export const getMarkByStudent = async (id: number) => await markRepository.find({
    where: {
        student: {id}
    }
})

export const getMarkByAll = async (subjectId: number, studentId: number) => await markRepository.find({
    where: {
        subject: {id: subjectId},
        student: {id: studentId}
    }
})

export const addMark = async (data: any) => await markRepository.save(data)

export const updateMark = async (data: any, id: number) => await markRepository.update(id, data)

export const removeMark = async (id: number) => await markRepository.delete(id)

export const getMarkById = async (id: number) => await markRepository.findOne({
    where :{
        id: id
    }
})
