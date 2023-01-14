import {Router} from 'express'
import { add, getAll, getById, remove, update } from '../controllers/Mark.Controller'
import { checkJwt } from '../middlewares/CheckJwt.middleware'
import { checkRole } from '../middlewares/CheckRole.middleware'


const router = Router()

router.get('/mark',getAll)
router.put('/mark/:id',[checkJwt, checkRole(["admin"])],update)
router.post('/mark',[checkJwt, checkRole(["admin"])],add)
router.get('/mark/:id',[checkJwt, checkRole(["admin"])],getById)
router.delete('/mark/:id',remove)

export default router