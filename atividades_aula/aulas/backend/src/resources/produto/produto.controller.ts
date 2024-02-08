import { Request, Response } from "express"
import { createProduto, listProdutos, produtoAlreadyExists,readProduto } from "./produto.service";
import {
    ReasonPhrases,
    StatusCodes,
    getReasonPhrase,
    getStatusCode,
} from 'http-status-codes';

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
        if (await produtoAlreadyExists(produto.nome)) {
            res.status(StatusCodes.CONFLICT).json(StatusCodes.CONFLICT)
        } else {
            const newProduto = await createProduto(produto);
            res.status(StatusCodes.CREATED).json(newProduto);
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
const read = async (req: Request, res: Response) => { 
    const {id} = req.params;

    try{
        const produto = readProduto(id);
        
        if(!produto) 
            return res.status(StatusCodes.NOT_FOUND).json(ReasonPhrases.NOT_FOUND)
        res.status(StatusCodes.OK).json(produto)
    } catch (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
    }

};
const update = async (req: Request, res: Response) => { };
const remove = async (req: Request, res: Response) => { };

export default { index, create, read, update, remove }





