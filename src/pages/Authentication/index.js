import React from "react";

import SignIn from "../../components/authentication/signIn";
import SignOut from "../../components/authentication/signOut";

// import { Container } from './styles';

function Authentication() {
  return (
    <div className="authentication">
      <SignIn />
      <SignOut />
    </div>
  );
}

export default Authentication;
