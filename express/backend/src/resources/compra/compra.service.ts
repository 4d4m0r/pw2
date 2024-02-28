import { PrismaClient } from '@prisma/client';
import { Compra, CompraItem } from './compra.types';

const prisma = new PrismaClient();

export async function adicionarProdutoAoCarrinho(produtoId: string, quantidade: number): Promise<void> {
   // Tenho que verificar se o produto existe
   // Se ele existe verificar se a quantidade pedida existe
   // Se as condições acima forem ok adicionar na tabela compraItem
}

export async function concluirCompra(usuarioId: string): Promise<Compra> {
    // Verificar se o usuario possui produtos na tabela compraItem
    // Crio a compra na tabela compra
    // Atualizo o estoque de produtos na tabela Produtos
    // Limpo o carrinho do usuário na tabela compraItem
}
