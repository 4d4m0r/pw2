import { Request, Response } from 'express';
import {getAllUsuarios,createUsuario,updateUsuario,buscaUsuarioPorEmail,buscaUsuarioPorId,deleteUsuario,jaExiste} from './usuario.service'

async function index(req: Request, res: Response) {
  try {
    const usuarios = await getAllUsuarios();
    res.status(200).json(usuarios);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function create(req: Request, res: Response) {
  const usuario = req.body;
  try {
    const newUsuario = await createUsuario(usuario);
    res.status(201).json(newUsuario);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function read(req: Request, res: Response) {
  const id = req.params.id;
  try {
    const produto = await buscaUsuarioPorId(id);
    if(produto !== null){
      res.status(201).json(produto);
    }else{
      res.status(200).json({ message: 'Usuário não encontrado.' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
}

export async function update(req: Request, res: Response){
  const { id } = req.params;
  const usuarioData = req.body;

  try {
    const uptaded = await updateUsuario(id, usuarioData);
    if (uptaded === 1) {
      res.status(200).json({ message: 'Usuario atualizado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Usuario não encontrado.' });
    }
  } catch (error) {
    console.error('Erro ao atualizar o usuario:', error);
    res.status(500).json({ message: 'Ocorreu um erro ao atualizar o usuario.' });
  }
}

export async function remove(req: Request, res: Response){
  const id = req.params.id;

  try{
    const deleted = await deleteUsuario(id);

    if( deleted === 1){
      res.status(200).json({message: 'Usuário removido com sucesso!'})
    }else{
      res.status(404).json({message: 'Usuário não encontrado!'})
    }
  }catch(err){
    console.error('Erro ao remover o usuario:', err);
    res.status(500).json({ message: 'Ocorreu um erro ao remover o usuario.' });
  }
}

export default {create,index,update,read,remove};
