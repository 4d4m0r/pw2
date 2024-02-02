import express from "express";
import dotenv from "dotenv";
import morgan from 'morgan';
import validateEnv from "./utils/validateEnv";
import router from "./router/index";

dotenv.config();
validateEnv();

const PORT = process.env.PORT ?? 3344;
const app = express();

app.use(morgan('combined'));
app.use(express.json())
app.use(router);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})
