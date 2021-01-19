import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./styles.scss";

function Header() {
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
        <Link to="/shop" className="option">
          Shop
        </Link>
      </div>
    </div>
  );
}

export default Header;
