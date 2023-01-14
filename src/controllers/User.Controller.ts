import {  Request, Response } from "express"
import { getAll, addUser, removeUser, getUserById } from "../repositories/User.Repository";
import { User } from './../entities/User';
import { updateUser } from './../repositories/User.Repository';


/**
 * Get all User in db
 * @param req 
 * @param res 
 * @returns 
 */
export const index = async (req: Request, res: Response) => {
    try {
        const users = await getAll()
        return res.json (users)
    }
    catch(error) {
        if(error instanceof Error)
        return res.status(400).send()
    }
}

/**
 * Get users by id
 * @param req 
 * @param res 
 * @returns 
 */
export const getByID = async (req: Request, res: Response) => {
    try {
        const user = await getUserById(parseInt(req.params.id))
        if(!user) return res.status(404).json({message: "User does not exits"})
        return res.json([user])
    }
    catch(error) {
        if(error instanceof Error)
            return res.status(400).json(error.message)
    }
}
/**
 * Add new user
 * @param req 
 * @param res 
 * @returns 
 */
export const add = async (req: Request, res: Response) => {
    try {
        await addUser(req.body)
        return res.status(200).json("create succesful")
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

/**
 * Update a User
 * @param req 
 * @param res 
 * @returns 
 */
export const update = async(req: Request, res: Response) => {
    try {
        console.log(req.body);
        
        const user = await getUserById(parseInt(req.params.id))
        if(!user) return res.status(404).json({message: "User does not exits"})
        await updateUser(req.body,parseInt(req.params.id))
        return res.sendStatus(204)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

/**
 * Hard delete User
 * @param req 
 * @param res 
 * @returns 
 */
export const del = async(req: Request, res: Response) => {
    try {
        const user = await getUserById(parseInt(req.params.id))
        if(!user) return res.status(404).json({message: "User does not exits"})
        await User.delete({id: parseInt(req.params.id)})
        return res.sendStatus(200)
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}

/**
 * Soft delete by change user's status
 * @param req 
 * @param res 
 * @returns 
 */
export const remove = async(req: Request, res: Response) => {
    try {
        const user = await getUserById(parseInt(req.params.id))
        if(!user) return res.status(404).json({message: "User does not exits"})
        await removeUser(parseInt(req.params.id))
        return res.status(200).json({message: "Delete successful"})
    }
    catch(error){
        if(error instanceof Error)
        return res.status(400).json(error.message)
    }
}