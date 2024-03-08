import { SignUpDto } from "@/types/auth";
import api from "@/utils/api";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";

function SignUp() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const credenciais: SignUpDto = {
      nome: nome,
      email: email,
      senha: senha,
    };
    api.post("/signup", credenciais).then((data) => {
      router.push("/produto");
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Crie sua Conta
      </Typography>

      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <TextField
            label="Senha"
            variant="outlined"
            fullWidth
            required
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Box>
        <Button variant="contained" type="submit" fullWidth>
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default SignUp;
