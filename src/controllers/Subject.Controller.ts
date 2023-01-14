
import { Request, Response } from "express"
import { addSubject, getall, getSubjectById, updateSubject } from "../repositories/Subject.Repository"
import { getAll } from "../repositories/User.Repository";
import { removeSubject } from './../repositories/Subject.Repository';
import { Subject } from './../entities/Subject';

export const index = async(req: Request, res: Response) => {
    try {
        const u = await getall()
        return res.json (u)
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const add = async (req: Request, res: Response) => {
    try {
        await addSubject(req.body)
        return res.status(200).json("create succesful")
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const update = async(req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(parseInt(req.params.id))
        if(!subject) return res.status(404).json({message: "User does not exits"})
        await updateSubject(req.body, parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        console.log(req.body);
        
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const remove = async(req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(parseInt(req.params.id))
        if(!subject) return res.status(404).json({message: "User does not exits"})
        await removeSubject(parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

export const getById = async(req: Request, res: Response) => {
    try {
        const subject = await getSubjectById(parseInt(req.params.id))
        if(!subject) return res.status(404).json({message: "User does not exits"})
        return res.json(subject)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}