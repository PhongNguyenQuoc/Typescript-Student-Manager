import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import config from "../config/Config";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {

  //Get the jwt token from the head
  const token = <string>req.headers.authorization;


  console.log("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI4LCJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjY2NzIyMTczLCJleHAiOjE2NjY3MjU3NzN9.Zojyqp2vWcRixpPYD2qD3KLTAzm8cSqLgUtcVQfJJeY");
  let jwtPayload;

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    })
  }
  
  //Try to validate the token and get data
  try {
    jwtPayload = <any>jwt.verify(token, config.jwtSecret);
    console.log(token)
    res.locals.jwtPayload = jwtPayload
  } catch (error) {
    console.log("user")
    //If token is not valid, respond with 401 (unauthorized)
    res.status(401).send();
    return;
   }

  //The token is valid for 1 hour
  //We want to send a new token on every request
  const { userId, username } = jwtPayload;
  const newToken = jwt.sign({ userId, username }, config.jwtSecret, {
    expiresIn: "1h"
  });
  res.setHeader("token", newToken);

  //Call the next middleware or controller
  next();
};
