import { Produto } from "@/types/produto";

const produtos: Produto[] = [
  { id: 1, nome: "Computador", preco: 5000, estoque: 10 },
  { id: 2, nome: "Celular", preco: 2001, estoque: 20 },
  { id: 3, nome: "Tablet", preco: 1760, estoque: 30 },
  { id: 4, nome: "Cama", preco: 3240, estoque: 1 },
  { id: 5, nome: "Escova", preco: 10, estoque: 4 },
];

export const getOneProduto = (id: number): Produto | undefined => {
  return produtos.find((prod) => prod.id === id);
};

export const getAllProdutos = () => produtos;
