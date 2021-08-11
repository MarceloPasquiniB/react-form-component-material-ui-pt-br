import React from "react";
import FormularioCadastro from "../components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

import ValidacoesCadastro from "../contexts/ValidacoesCadastro";

import { validarCPF, validarSenha, validarNome } from "../models/cadastro";

export default function Form() {
  function aoEnviarForm(dados) {
    console.log(dados);
  }
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}
      >
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}
