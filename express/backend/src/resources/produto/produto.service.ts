import { PrismaClient, Produto } from '@prisma/client';

import { CreateProdutoDto,UpdateProdutoDto } from './produto.types';

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

export async function getProduto(id: string): Promise<Produto | null> {
  return await prisma.produto.findUnique({
    where: {
      id,
    },
  });
}

export async function updateProduto(id: string, produto: UpdateProdutoDto): Promise<number> {
  const updatedProduto = await prisma.produto.update({
    where: {
      id,
    },
    data: produto,
  });
  return updatedProduto ? 1 : 0;
}

export async function removeProduto(id: string): Promise<number> {
  const deletedProduto = await prisma.produto.delete({
    where: {
      id,
    },
  });
  return deletedProduto ? 1 : 0;
}
