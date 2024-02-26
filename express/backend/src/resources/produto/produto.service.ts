import { PrismaClient, Produto } from '@prisma/client';

import { CreateProdutoDto } from './produto.types';

const prisma = new PrismaClient();

export async function getAllProdutos(): Promise<Produto[]> {
  return await prisma.produto.findMany();
}

export async function createProduto(
  produto: CreateProdutoDto,
): Promise<Produto> {
  return await prisma.produto.create({ data: produto });
}

export async function jaExiste(nome: string): Promise<boolean> {
  const produto = await prisma.produto.findUnique({
    where: {
      nome,
    },
  });

  return !!produto;
}

// const getProduto = async (id: string): Promise<Produto>
// const updateProduto = async (id: string, produto: ProdutoCreateDto):
// Promise<[affectedCount: number]>
// const removeProduto = async (id: string): Promise<number>
