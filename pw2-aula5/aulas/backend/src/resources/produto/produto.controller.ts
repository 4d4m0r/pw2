import { Request, Response } from "express"
import { createProduto } from "./produto.service";

const index = async (req: Request, res: Response) => {
    res.send("Hello World!!!!!!!")
};
const create = async (req: Request, res: Response) => {
    const produto = req.body;
    try {
        const newProduto = await createProduto(produto);
        res.status(201).json(newProduto);
    } catch (err) {
        res.status(500).json(err);
    }
};
const read = async (req: Request, res: Response) => { };
const update = async (req: Request, res: Response) => { };
const remove = async (req: Request, res: Response) => { };

export default { index, create, read, update, remove }





