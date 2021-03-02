import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.config";

import "./styles.scss";

function Header({ currentUser }) {
  console.log("Header", currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shopping
        </Link>
        <Link to="/shop" className="option">
          Contato
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Logout
          </div>
        ) : (
          <Link className="option" to="/auth">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
