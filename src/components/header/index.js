import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../utils/firebase/firebase.config";

import CartDropdown from "../cart-dropdown/index";

import Cart from "../cart-icon";
import "./styles.scss";

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
