import api from "@/utils/api";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { FormEvent } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import ProdutoForm from "./ProdutoForm";
import { CreateProdutoDto } from "@/types/produto";

function ProdutoCreate() {
  const router = useRouter();

  const handleSubmit = (produto: CreateProdutoDto) => {
    api
      .post("/produto", produto)
      .then(() => {
        router.push("/produto");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Criação de Produtos</h1>
      <ProdutoForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default ProdutoCreate;
