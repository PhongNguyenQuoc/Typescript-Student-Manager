import {Router} from 'express'
import {index,add,update,remove, getByID} from "../controllers/User.Controller"
import { checkRole } from "../middlewares/CheckRole.middleware";
import {Roles} from "../utils/EnumRoles"
import { requiresAuth } from'express-openid-connect'
import { auth } from'express-oauth2-jwt-bearer';
const { requiredScopes } = require('express-oauth2-jwt-bearer');
const { expressjwt: expressJwt } = require('express-jwt');
const jwks = require('jwks-rsa');

const router = Router()

const jwtCheck = expressJwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-6gg07cw4rqjhfyih.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'localhost:9000/api',
  issuer: 'https://dev-6gg07cw4rqjhfyih.us.auth0.com/',
  algorithms: ['RS256']
});

const checkScopes = requiredScopes('access');
 router.get('/user',index)
// router.get('/user',index)
router.get('/user/:id',getByID)
router.post('/user',add)
router.put('/user/:id', update)
//router.delete('/user/:id',del)
router.delete('/user/:id',remove)

export default router