import { Request, Response } from 'express';
import {adicionarProdutoAoCarrinho} from './compra.service';

export async function adicionarProduto(req: Request, res: Response): Promise<void> {
    const { usuarioId,items } = req.body;
    try {
        const addProduto = await adicionarProdutoAoCarrinho(usuarioId,items)
        res.status(200).json(addProduto);
    } catch (e) {
        res.status(400).json(e);
    }
}

export async function concluir(req: Request, res: Response): Promise<void> {
}
