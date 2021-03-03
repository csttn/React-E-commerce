import React, { useState } from "react";

import CustomButton from "../../custom-button";
import FormInput from "../../form-input";

import {
  auth,
  createUserProfileDocument,
} from "../../../utils/firebase/firebase.config";

import "./styles.scss";

function SignOut() {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

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

      setUserCredentials({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">Cadastrar</h2>
      <form className="signUp-form" onSubmit={handleSubmit}>
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
