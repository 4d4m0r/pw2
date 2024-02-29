import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Produto } from '@/types/produto';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface ProdutoCardProps {
  produto: Produto
}

export default function ProdutoCard({ produto }: ProdutoCardProps) {
  const [quantidade, setQuantidade] = useState(1);
  const [precoTotal, setPrecoTotal] = useState(1 * produto.preco)

  useEffect(() => {
    setPrecoTotal(quantidade * produto.preco)
  }, [quantidade])

  const increaseQtd = () => {
    if (quantidade < produto.estoque) setQuantidade(quantidade + 1);
  }

  const decreaseQtd = () => {
    if (quantidade > 1) setQuantidade(quantidade - 1);
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {produto.nome}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Preço = {produto.preco}
          <br />
          Estoque = {produto.estoque}
          <br />
          Quantidade = {quantidade}
          <br />
          Preço Total = {precoTotal}
        </Typography>
      </CardContent>
      <ButtonGroup variant="contained" aria-label="Basic button group">
        <Button variant='contained' onClick={increaseQtd}><AddIcon /></Button>
        <Button variant='contained' onClick={decreaseQtd}><RemoveIcon /></Button>
      </ButtonGroup>
    </Card>
  );
}