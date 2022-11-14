import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";
import helmet from "helmet";
import indexRouters from './routes/Index.Routes'
import { auth } from 'express-openid-connect';
const { expressjwt: expressJwt } = require('express-jwt');
const jwks = require('jwks-rsa');
const app = express();
const config = {
    authRequired: false,
    auth0Logout: true,
    baseURL: 'http://localhost:3000',
    clientID: '636132cd584794ac49be99f4',
    issuerBaseURL: 'localhost:9000/api',
    secret: 'LONG_RANDOM_STRING'
  };
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

app.use(morgan('dev'))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json())
app.use(auth(config));
app.use(jwtCheck)

app.use(indexRouters)

export default app