import { CompraItem } from "@prisma/client";

export type AddCompraItemDto = Pick<CompraItem, 'produtoId' | 'quantidade'>
