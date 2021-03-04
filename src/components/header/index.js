import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Cart from "../cart-icon";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.config";

import "./styles.scss";
import CartDropdown from "../cart-dropdown/index";

function Header({ currentUser, hidden }) {
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
            Sair
          </div>
        ) : (
          <Link className="option" to="/auth">
            Entrar
          </Link>
        )}
        <Cart />
      </div>
      {hidden ? <CartDropdown /> : null}
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
