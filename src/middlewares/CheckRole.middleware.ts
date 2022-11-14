import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/DB.Config";
import { User } from "../entities/User";
import { getUserById } from "../repositories/User.Repository";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;
    console.log("=====",id,"========")
    //Get user role from the database
    const userRepository = AppDataSource.getRepository(User);
    let user: User ;
    const U = await getUserById(id)
   

    //Check if array of authorized roles includes the user's role
      if (roles.indexOf(U.role) > -1) next();
      else {
        console.log("not")
        res.status(401).send();
      }
  };
};
