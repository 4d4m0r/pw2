import { Produto } from "@/types/produto";

const produtos: Produto[] = [
  { id: 1, nome: "Galo de Briga Jubileu", preco: 5000, estoque: 10 },
  { id: 2, nome: "Cleison, o Destrói-Pescoço", preco: 2001, estoque: 20 },
  { id: 3, nome: "Lourival", preco: 1760, estoque: 30 },
  { id: 4, nome: "Garra de Ferro", preco: 3240, estoque: 1 },
  { id: 5, nome: "Depois das 6", preco: 10, estoque: 4 },
];

export const getOneProduto = (id: number): Produto | undefined => {
  return produtos.find((prod) => prod.id === id);
};

export const getAllProdutos = () => produtos;
