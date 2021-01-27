import React, { useState } from "react";

import FormInput from "../../form-input";
import CustomButton from "../../custom-buttom";

import { signInWithGoogle } from "../../../utils/firebase/firebase.config";

import "./styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    if (name === "password") {
      setPassword(value);
    } else {
      setEmail(value);
    }
  };

  return (
    <div className="sign-in">
      <h2> Já tenho uma conta </h2>
      <span> Insira seu e-mail e a sua senha </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="E-Mail"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          required
          handleChange={handleChange}
          label="Senha"
        />

        <div className="buttons">
          <CustomButton type="submit" value="Enviar">
            Entrar
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Login com Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
