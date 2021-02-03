import React from "react";

import SignIn from "../../components/authentication/signIn";
import SignOut from "../../components/authentication/signOut";

import "./styles.scss";

function Authentication() {
  return (
    <div className="authentication">
      <SignIn />
      <SignOut />
    </div>
  );
}

export default Authentication;
