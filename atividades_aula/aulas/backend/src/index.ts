import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import validateEnv from "./utils/validateEnv";
import router from "./router/index";
import cookieParser from "cookie-parser"
import { setLangCookie } from '../src/middlewares/setCookieLanguage';

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(morgan('combined'));
app.use(express.json())
app.use(cookieParser())
app.use(setLangCookie)
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
