import {  Request, Response } from "express"
import { getMarkById, getMarkByStudent, getMarkBySubject, updateMark, addMark, getMarkByAll, removeMark } from './../repositories/Mark.Repository';

export const filterBySubject = async (req: Request, res: Response) => {
    try {
        const marks = await getMarkBySubject(parseInt(req.params.id))
        if(!marks) return res.status(404).json("This subject has no mark yet")
        return res.json(marks)
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const filterByStudent = async (req: Request, res: Response) => {
    try {
        const marks = await getMarkByStudent(parseInt(req.params.id))
        if(!marks) return res.status(404).json({message: ""})
        return res.json(marks)
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        
        await addMark(req.body)
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        await updateMark(req.body,parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const getAll = async (req: Request, res: Response) => {
    try {
        const student_id: any = req.query.student_id
        const subject_id: any = req.query.subject_id
        if(student_id!=null ) {
            if(subject_id==null) {
                const marks = await getMarkByStudent(parseInt(student_id))
                if(marks.length==0) return res.status(404).json({message: "No data"})
                return res.json(marks)
            }
            else {
                const marks = await getMarkByAll(parseInt(subject_id),parseInt(student_id))
                if(marks.length==0) return res.status(404).json({message: "No data"})
                return res.json(marks)
            }
        }
        else {
            const marks = await getMarkBySubject(parseInt(subject_id))
            if(marks.length==0) return res.status(404).json({message: "No data"})
            return res.json(marks)
        }
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const remove = async(req: Request, res: Response) => {
    try {
        const mark = await getMarkById(parseInt(req.params.id))
        if(!mark) return res.status(404).json({message: "Mark does not exits"})
        await removeMark(parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const getById = async(req: Request, res: Response) => {
    try {
        const mark = await getMarkById(parseInt(req.params.id))
        if(!mark) return res.status(404).json({message: "Mark does not exits"})
        return res.json(mark)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}