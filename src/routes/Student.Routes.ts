import {Router} from 'express'
import { add, getById, index, remove, update } from '../controllers/Student.Controller'
import { checkRole } from "../middlewares/CheckRole.middleware";
import { checkJwt } from './../middlewares/CheckJwt.middleware';

const router = Router()

router.get('/student',index)
router.get('/student/:id',getById)
router.post('/student',[checkJwt, checkRole(["admin", "teacher"])],add)
router.put('/student/:id',[checkJwt, checkRole(["admin"])],update)
router.delete('/student/:id',[checkJwt, checkRole(["admin"])],remove)

export default router