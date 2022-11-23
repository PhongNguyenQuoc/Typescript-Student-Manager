import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from "body-parser";
import helmet from "helmet";
import indexRouters from './routes/Index.Routes'
const app = express();
app.use(morgan('dev'))
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(express.json())

app.use(indexRouters)

export default app