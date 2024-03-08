import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Produto } from "@/types/produto";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Container from "@mui/material/Container";
import api from "@/utils/api";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, Link, Stack, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/router";

interface ProdutoCardProps {
  id: string;
}

export default function ProdutoCard({ id }: ProdutoCardProps) {
  const [quantidade, setQuantidade] = useState(1);
  const [produto, setProduto] = useState<Produto>();
  const precoTotal = produto ? quantidade * produto.preco : 0;

  const router = useRouter();
  useEffect(() => {
    api.get(`/produto/${id}`).then((data) => {
      setProduto(data.data);
    });
  }, [id]);

  const increaseQtd = () => {
    if (produto && quantidade < produto.estoque) setQuantidade(quantidade + 1);
  };

  const decreaseQtd = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  };

  const handleDelete = (e: any) => {
    e.preventDefault();

    api.delete(`/produto/${id}`).then(() => {
      router.push("/produto");
    });
  };
  if (!produto) return <>Carregando...</>;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Preço:</strong> R$ {produto.preco}
          <br />
          <strong>Estoque:</strong> {produto.estoque}
        </Typography>
        <Box mt={2}>
          <Stack direction="row" spacing={1} alignItems="center">
            <ButtonGroup>
              <Button onClick={decreaseQtd} disabled={quantidade === 1}>
                <RemoveIcon />
              </Button>
              <Button>{quantidade}</Button>
              <Button onClick={increaseQtd} disabled={quantidade === produto.estoque}>
                <AddIcon />
              </Button>
              
            </ButtonGroup>
            <Typography>
              Preço Total: R$ {(quantidade * produto.preco).toFixed(2)}
            </Typography>
          </Stack>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton component={Link} href={`/produto/update/${id}`}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
