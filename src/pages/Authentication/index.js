import React from "react";

import SignIn from "../../components/authentication/signIn";
import SignUp from "../../components/authentication/signUp";

import "./styles.scss";

function Authentication() {
  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default Authentication;
