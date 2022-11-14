import { Router } from "express";
import userRoutes from '../routes/User.Routes'
import markRoutes from '../routes/Mark.Routes'
import subjectRoutes from '../routes/Subject.Routes'
import studentRoutes from '../routes/Student.Routes'
import authRouters from '../routes/Auth.Routes'
import { requiresAuth } from'express-openid-connect'
import { auth } from'express-oauth2-jwt-bearer';

const router = Router()

router.use("/auth",authRouters)
router.use("/api",userRoutes,markRoutes,subjectRoutes,studentRoutes)

export default router
