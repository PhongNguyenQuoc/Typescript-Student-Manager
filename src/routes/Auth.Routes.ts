import { Router } from "express";
import {Login} from "../controllers/Auth.Controller";

const router = Router()

router.post('/login', Login)

export default router
