import React from "react";

import CustomButton from "../custom-button/index";
import "./styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> Finalizar Pedido</CustomButton>
    </div>
  );
}

export default CartDropdown;
