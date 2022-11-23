import { Request, response, Response } from "express";
import * as jwt from "jsonwebtoken";
import Config from "../config/Config";
import { login } from "../repositories/User.Repository";
import { User } from "./../entities/User";

export const Login = async (req: Request, res: Response) => {
  let { username, password } = req.body;
  console.error("username")
  if (!(username && password)) {
    res.status(400).send();
  } else {
    let user: User = new User();
    try {
      user = await login(username, password);
    } catch (error) {
      res.sendStatus(401)
      return
    }

    const token = jwt.sign(
      { userId: user.id, username: user.user_name, role: user.role },
      Config.jwtSecret,
      { expiresIn: "1h" }
    );
    res.send({ token });
  }
};
