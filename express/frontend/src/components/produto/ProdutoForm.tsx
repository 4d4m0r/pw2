import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import { CreateProdutoDto, Produto } from "@/types/produto";

interface Props {
  handleSubmit: (produto: CreateProdutoDto) => void;
  produto?: Produto;
}

function ProdutoForm({ handleSubmit,produto }: Props) {
  const [nome, setNome] = useState<string>(produto ? produto.nome : " ");
  const [preco, setPreco] = useState<number | undefined>(produto ? produto.preco : undefined);
  const [estoque, setEstoque] = useState<number| undefined>(produto ? produto.estoque : undefined);

  useEffect(() => {
    if (produto) {
      setNome(produto.nome);
      setPreco(produto.preco);
      setEstoque(produto.estoque);
    }
  }, [produto]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const produto = { nome: nome!, preco: preco!, estoque: estoque! };
    handleSubmit(produto);
  };

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Nome"
          required
          value={nome ?? ""}
          variant="outlined"
          onChange={(e) => setNome(e.target.value)}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Preço"
          required
          type="number"
          value={preco ?? ""}
          variant="outlined"
          onChange={(e) => setPreco(parseFloat(e.target.value))}
        />
      </Box>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Estoque"
          required
          type="number"
          value={estoque ?? ""}
          variant="outlined"
          onChange={(e) => setEstoque(parseInt(e.target.value))}
        />
      </Box>
      <Button variant="contained" type="submit">
        Enviar
      </Button>
    </form>
  );
}

export default ProdutoForm;
