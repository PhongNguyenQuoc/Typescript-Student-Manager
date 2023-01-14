import {Router} from 'express'
import {index,add,update,remove, getByID} from "../controllers/User.Controller"
import { checkRole } from "../middlewares/CheckRole.middleware";
import { checkJwt } from './../middlewares/CheckJwt.middleware';

const router = Router()

router.get('/user',[checkJwt, checkRole(["admin"])], index)
// router.get('/user',index)
router.get('/user/:id',getByID)
router.post('/user',[checkJwt, checkRole(["admin"])],add)
router.put('/user/:id',[checkJwt, checkRole(["admin"])], update)
router.delete('/user/:id',remove)

export default router