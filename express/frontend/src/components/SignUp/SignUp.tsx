import { SignUpDto } from "@/types/auth";
import api from "@/utils/api";
import {
  Box,
  Button,
  Container,
  InputAdornment,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { AxiosError, AxiosResponse } from "axios";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

function SignUp() {
  const router = useRouter();
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");
  const [confirmSenha, setConfirmSenha] = useState<string>("");
  const [erro, setErro] = useState<string>("");
  const [viewSenha, setViewSenha] = useState<boolean>(false);
  const [viewConfirmSenha, setViewConfirmSenha] = useState<boolean>(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (senha != confirmSenha) setErro("As senhas não batem.");
    else {
      const credenciais: SignUpDto = {
        nome: nome!,
        email: email!,
        senha: senha!,
      };
      api
        .post("/signup", credenciais, { withCredentials: true })
        .then((data) => {
          console.log(data);
          router.push("/");
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 500) {
            setErro("Usuário já existe. Por favor, escolha outro email.");
          } else {
            setErro(
              "Erro ao criar usuário. Por favor, tente novamente mais tarde."
            );
          }
        });
    }
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
            type={viewSenha ? "text" : "password"}
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewSenha(!viewSenha);
                    }}
                  >
                    {viewSenha ? <VisibilityOff /> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box>
          <TextField
            label="Confirme Senha"
            variant="outlined"
            fullWidth
            required
            type={viewConfirmSenha ? "text" : "password"}
            value={confirmSenha}
            onChange={(e) => setConfirmSenha(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setViewConfirmSenha(!viewConfirmSenha);
                    }}
                  >
                    {viewConfirmSenha ? <VisibilityOff /> : <Visibility/>}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{ color: "red" }}>
            {erro}
          </Typography>
        </Box>

        <Button variant="contained" type="submit" fullWidth>
          Enviar
        </Button>
      </form>
    </Container>
  );
}

export default SignUp;
