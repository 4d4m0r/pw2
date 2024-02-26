import { Request, Response } from 'express';
import { createProduto, jaExiste,getAllProdutos } from './produto.service';

async function index(req: Request, res: Response) {
  try {
    const produtos = await getAllProdutos();
    res.status(200).json(produtos);
  } catch (err) {
    res.status(500).json(err);
  }
}


async function create(req: Request, res: Response) {
  const produto = req.body;
  try {
    if (await jaExiste(produto.nome)) {
      return res.status(400).json({ msg: 'Produto já existe' });
    }

    if (!produto.nome || !produto.preco || !produto.estoque) {
      return res.status(400).json({ msg: 'Missing required fields: nome, preco, or estoque' });
    }

    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (err) {
    res.status(500).json(err);
  }
}

export default {create,index};
