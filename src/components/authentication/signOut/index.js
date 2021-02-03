import React, { useState } from "react";

import CustomButton from "../../custom-buttom";
import FormInput from "../../form-input";

import {
  auth,
  createUserProfileDocument,
} from "../../../utils/firebase/firebase.config";

import "./styles.scss";

function SignOut() {
  const [useCredentials, setUseCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = useCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Senhas diferentes.");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setUseCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }

    console.log(useCredentials);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;

    setUseCredentials({ ...useCredentials, [name]: value });
  };

  return (
    <div className="sign-out">
      <h2 className="title">Cadastrar</h2>
      <form className="signOut-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Nome"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Senha"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirmar senha"
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Cadastrar</CustomButton>
      </form>
    </div>
  );
}

export default SignOut;
