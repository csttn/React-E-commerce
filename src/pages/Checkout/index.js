import React, { useEffect } from "react";

import "./styles.scss";
import { connect } from "react-redux";
import {
  selectCartTotal,
  selectCartItems,
  selectCartHidden,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

function Checkout({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produtos</span>
        </div>
        <div className="header-block">
          <span>Descrição</span>
        </div>
        <div className="header-block">
          <span>Quantidade</span>
        </div>
        <div className="header-block">
          <span>Preço</span>
        </div>
        <div className="header-block">
          <span>Remover</span>
        </div>
      </div>

      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">TOTAL: R$ {total}</div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({});

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
  cartItems: selectCartItems,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
