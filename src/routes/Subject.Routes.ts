import {Router} from 'express'
import { add, getById, index, remove, update } from '../controllers/Subject.Controller'

const router = Router()

router.get('/subject',index)
router.get('/subject',getById)
router.post('/subject',add)
router.put('/subject/:id',update)
router.delete('/subject/:id',remove)

export default router