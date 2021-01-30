import React, { useState } from "react";

import CustomButton from "../../custom-buttom";
import FormInput from "../../form-input";

// import { Container } from './styles';

function SignOut() {
  const [displayName, setDisplayName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  return (
    <div>
      <title>Cadastrar</title>
      <span>enviar email e senha</span>
      <form action="">
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Nome"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="email"
          name="password"
          value={password}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirmar senha"
          required
        />
        <CustomButton type="submit">Cadastrar</CustomButton>
      </form>
    </div>
  );
}

export default SignOut;
