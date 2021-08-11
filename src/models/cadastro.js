function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos." };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  const senhaRegex = new RegExp(
    "^([a-zA-Z0-9@*#!%]{8,15})$"
  );
  if (!senhaRegex.test(senha)) {
    return {
      valido: false,
      texto:
        "Senha deve ter entre 9/15 dígitos",
    };
  } else {
    return { valido: true, texto: "" };
  }
}


function validarNome(nome) {
  const nomeRegex = new RegExp("^[a-zA-Z]+$")
  if (!nomeRegex.test(nome)) {
    return { valido: false, texto: "O nome deve conter apenas letras" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha, validarNome };
