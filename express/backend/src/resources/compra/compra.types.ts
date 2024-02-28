export interface Produto {
  id: string;
  nome: string;
  preco: number;
  estoque: number;
}

export interface CompraItem {
  produtoId: string;
  quantidade: number;
}

export interface Compra {
  id: string;
  usuarioId: string;
  items: CompraItem[];
}
