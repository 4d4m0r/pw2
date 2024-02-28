import { PrismaClient } from '@prisma/client';
import { Compra, CompraItem } from './compra.types';

const prisma = new PrismaClient();

export async function adicionarProdutoAoCarrinho(produtoId: string, quantidade: number): Promise<void> {}

export async function concluirCompra(usuarioId: string): Promise<Compra> {}
