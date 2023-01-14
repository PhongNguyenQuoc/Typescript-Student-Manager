import {Router} from 'express'
import { add, getById, index, remove, update } from '../controllers/Subject.Controller'
import { checkJwt } from '../middlewares/CheckJwt.middleware'
import { checkRole } from '../middlewares/CheckRole.middleware'

const router = Router()

router.get('/subject',index)
router.get('/subject',getById)
router.post('/subject',[checkJwt, checkRole(["admin"])],add)
router.put('/subject/:id',[checkJwt, checkRole(["admin"])],update)
router.delete('/subject/:id',remove)

export default router