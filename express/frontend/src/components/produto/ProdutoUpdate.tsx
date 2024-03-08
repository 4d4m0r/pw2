import api from "@/utils/api";
import React, { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProdutoForm from "./ProdutoForm";
import { Produto, UpdateProdutoDto } from "@/types/produto";

interface Props {
  id: string;
}

function ProdutoUpdate({ id }: Props) {
  const [produto, setProduto] = useState<Produto>({} as Produto); 

  const router = useRouter();

  useEffect(() => {
    api
      .get(`/produto/${id}`)
      .then((data) => {
        setProduto(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (produto: UpdateProdutoDto) => {
    api
      .put(`/produto/${id}`, produto)
      .then(() => {
        router.push(`/produto/${id}`);
      })
      .catch((err) => console.log(err));
  };

  if(!produto) return <>Carregando...</>

  return (
    <div>
      <h1>Update de Produto</h1>
      <ProdutoForm handleSubmit={handleSubmit} produto = {produto}/>
    </div>
  );
}

export default ProdutoUpdate;
