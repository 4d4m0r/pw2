import express, { Request, Response } from "express";
import validateEnv from "./utils/validateEnv";
import dotenv from "dotenv";
import morgan from "morgan";
import accessLogger from "./utils/middleware";
import router from './router/index'

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;

app.use(morgan('short'));
app.use(accessLogger('simples'));

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
