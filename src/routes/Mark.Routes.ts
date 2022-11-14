import {Router} from 'express'
import { add, getAll, getById, remove, update } from '../controllers/Mark.Controller'


const router = Router()

router.get('/mark',getAll)
router.put('/mark',update)
router.post('/mark',add)
router.get('/mark/:id',getById)
router.delete('/mark/:id',remove)

export default router