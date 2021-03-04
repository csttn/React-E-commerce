import React from "react";

import "./styles.scss";

function CartItem({ item: { name, price, imageUrl, quantity } }) {
  console.log();
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="item-name">{name}</span>
        <span className="item-price">
          {quantity} x R$ {price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
