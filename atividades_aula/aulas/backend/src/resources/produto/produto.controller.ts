import { Request, Response } from "express"
import { createProduto,listProdutos,produtoAlreadyExists } from "./produto.service";

const index = async (req: Request, res: Response) => {
    try {
        const produtos = await listProdutos();
        res.status(201).json(produtos);
    } catch (err) {
        res.status(500).json(err);

    }
};
const create = async (req: Request, res: Response) => {
    const produto = req.body;
    try {
        if(await produtoAlreadyExists(produto.nome)){
            res.status(400).json({msg: 'Produto já existe!'})
        }else{
            const newProduto = await createProduto(produto);
            res.status(201).json(newProduto);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
const read = async (req: Request, res: Response) => { };
const update = async (req: Request, res: Response) => { };
const remove = async (req: Request, res: Response) => { };

export default { index, create, read, update, remove }





