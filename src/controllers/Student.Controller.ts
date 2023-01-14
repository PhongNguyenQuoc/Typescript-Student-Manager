import { Request, Response } from "express"
import { addStudent, getData, getStudentById, removeStudent, updateStudent } from "../repositories/Student.Repository"

export const index = async(req: Request, res: Response) => {
    try {
        const student = await getData()
        return res.json (student)
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        await addStudent(req.body)
        return res.status(200).json("create succesful")
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const update = async(req: Request, res: Response) => {
    try {
        
        const student = await getStudentById(parseInt(req.params.id))
        if(!student) return res.status(404).json({message: "Student does not exits"})
        await updateStudent(req.body, parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const remove = async(req: Request, res: Response) => {
    try {
        const student = await getStudentById(parseInt(req.params.id))
        if(!student) return res.status(404).json({message: "Student does not exits"})
        await removeStudent(parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const getById = async(req: Request, res: Response) => {
    try {
        const student = await getStudentById(parseInt(req.params.id))
        if(!student) return res.status(404).json({message: "Student does not exits"})
        return res.json(student)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}