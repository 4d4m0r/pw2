import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import session from 'express-session';
import { v4 as uuidv4 } from 'uuid';

import accessLogger from './utils/middleware';
import router from './router/index';
import cookieParser from 'cookie-parser';
import setLangCookie from './middlewares/setLangCookie';
import validateEnv from './utils/validateEnv';

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(
  session({
    genid: (req) => uuidv4(),
    secret: 'Hi9Cf#mK9Dm#@SmA76#4MP2sm@18',
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(morgan('short'));
app.use(accessLogger('simples'));
app.use(cookieParser());
app.use(setLangCookie);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
