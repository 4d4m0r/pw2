import { PrismaClient, Compra, CompraItem } from '@prisma/client';
import { AddCompraItemDto } from './compra.types';

const prisma = new PrismaClient();

export async function adicionarProdutoAoCarrinho(
  usuarioId: string,
  items: AddCompraItemDto
): Promise<Compra> {
  return await prisma.compra.create({
    data: {
      usuario: { connect: { id: usuarioId } },
      items: {
        createMany: {
          data: items,
        },
      },
    },
    include: { items: true },
  });
}

// export async function concluirCompra(usuarioId: string): Promise<Compra> {
//   // Verificar se o usuario possui produtos na tabela compraItem
//   // Crio a compra na tabela compra
//   // Atualizo o estoque de produtos na tabela Produtos
//   // Limpo o carrinho do usuário na tabela compraItem
// }
