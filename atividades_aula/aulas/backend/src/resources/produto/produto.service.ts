import { PrismaClient, Produto } from '@prisma/client';
import { CreateProdutoDto } from './produto.types';

const prisma = new PrismaClient();

export async function listProdutos(): Promise<Produto[]> {
    return await prisma.produto.findMany();
}

export async function createProduto( produto: CreateProdutoDto ): Promise<Produto> {
    return await prisma.produto.create({ data: produto });
}

export async function readProduto( id: String ): Promise<Produto | null> {
    return await prisma.produto.findUnique({ where: {id} });
}

export async function produtoAlreadyExists(nome: string): Promise<boolean> {
    return !!(await prisma.produto.findUnique({ where: {nome}} ));
}