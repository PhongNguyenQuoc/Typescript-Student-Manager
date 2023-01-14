import { Status } from "../utils/EnumStatus";
import { AppDataSource } from "../config/DB.Config";
import { Subject } from "../entities/Subject";

const subjectRepository = AppDataSource.getRepository(Subject)

export const getData = async () => await subjectRepository.find({
    where: {
        status: Status.ACTIVE,
    }
})

export const getall = async () => await subjectRepository.find()

export const addSubject = async (data: any) => await subjectRepository.save(data);

export const removeSubject = async (id: number) => await subjectRepository.update(id,{
    status: Status.INACTIVE
});

export const updateSubject = async (data: any,id: number) => await subjectRepository.update(id, data)

export const getSubjectById = async (id: number) => await subjectRepository.findOne({
    where: {
        id: id
    }
})
