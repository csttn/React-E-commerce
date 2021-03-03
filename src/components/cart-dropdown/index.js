import React from "react";

import CustomButton from "../custom-button/index";
import "./styles.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton> GO TO CHECKOUT</CustomButton>
    </div>
  );
}

export default CartDropdown;
