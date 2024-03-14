import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/utils/api";
import { Produto } from "@/types/produto";
import { Button, Card, CardContent, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ProdutoIndex() {
  const [produtos, setProdutos] = useState<Produto[]>();

  useEffect(() => {
    api.get("/produto", {withCredentials:true}).then((data) => {
      setProdutos(data.data);
    });
  }, []);

  if (!produtos) return <>Carregando...</>;

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1 style={{ marginRight: "1rem" }}>Galos Disponíveis</h1>
        <Button
          component={Link}
          href="/produto/create"
          variant="contained"
          startIcon={<AddIcon />}
        >
          Adicionar Galo de Combate
        </Button>
      </div>
      <div>
        {produtos.map((produto) => (
          <Card key={produto.id} style={{ marginBottom: "20px", maxWidth: "800px" }}>
            <CardContent style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Typography variant="h5" component="h2">
                  {produto.nome}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Preço: R$ {produto.preco}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  Estoque: {produto.estoque}
                </Typography>
              </div>
              <Link href={`/produto/${produto.id}`}>
                <Button size="small" variant="contained" color="primary">
                  Detalhes
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
