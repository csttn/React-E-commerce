import React from "react";
import CartItem from "../cart-item";

import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/index";
import { withRouter } from "react-router-dom";

import "./styles.scss";

function CartDropdown({ cartItems, history, dispatch }) {
  return (
    <div className="cart-dropdown">
      {cartItems.length ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem item={cartItem} key={cartItem.id} />
            ))}
          </div>
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              dispatch(toggleCartHidden());
            }}
          >
            Finalizar Pedido
          </CustomButton>
        </>
      ) : (
        <span className="empty-message">Seu Carrinho esta vazio</span>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
