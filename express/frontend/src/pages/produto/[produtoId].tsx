import React from "react";
import { useRouter } from "../../../node_modules/next/router";
import ProdutoCard from "@/components/produto/ProdutoCard";

function Produto() {
  const router = useRouter();
  const produtoId = parseInt(router.query.produtoId as string);
  return <ProdutoCard produtoId={produtoId} />;
}

export default Produto;
