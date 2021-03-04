import React from "react";
import CartItem from "../cart-item";

import CustomButton from "../custom-button/index";
import "./styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

function CartDropdown({ cart }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.map((cartItem) => (
          <CartItem item={cartItem} key={cartItem.id} />
        ))}
      </div>
      <CustomButton> Finalizar Pedido</CustomButton>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
