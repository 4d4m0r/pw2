import { Request, Response } from 'express';
import { createProduto, jaExiste,getAllProdutos,getProduto,updateProduto, removeProduto } from './produto.service';

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
    const newProduto = await createProduto(produto);
    res.status(201).json(newProduto);
  } catch (err) {
    res.status(500).json(err);
  }
}


async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const produto = await getProduto(id);
    if(produto !== null){
      res.status(201).json(produto);
    }else{
      res.status(200).json({ message: 'Produto não encontrado.' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function update(req: Request, res: Response){
  const { id } = req.params;
  const produtoData = req.body;

  try {
    const uptaded = await updateProduto(id, produtoData);
    if (uptaded === 1) {
      res.status(200).json({ message: 'Produto atualizado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Produto não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar o produto:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o produto.' });
  }
}

export async function remove(req: Request, res: Response){
  const id = req.params.id;

  try{
    const deleted = await removeProduto(id);

    if( deleted === 1){
      res.status(200).json({message: 'Produto removido com sucesso!'})
    }else{
      res.status(404).json({message: 'Produto não encontrado!'})
    }
  }catch(err){
    console.error('Erro ao remover o produto:', err);
    res.status(500).json({ message: 'Ocorreu um erro ao remover o produto.' });
  }
}

export default {create,index,read,update,remove};
