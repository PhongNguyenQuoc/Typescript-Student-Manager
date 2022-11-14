import {Router} from 'express'
import { add, getById, index, remove, update } from '../controllers/Student.Controller'

const router = Router()

router.get('/student',index)
router.get('/student/:id',getById)
router.post('/student',add)
router.put('/student/:id',update)
router.delete('/student/:id',remove)

export default router