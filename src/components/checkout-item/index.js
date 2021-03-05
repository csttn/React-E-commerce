import React from "react";

import { connect } from "react-redux";
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from "../../redux/cart/cart.actions";

import "./styles.scss";

function CheckoutItem({
  cartItem: { name, price, imageUrl, quantity },
  cartItem,
  removeItem,
  addItem,
  clearItem,
}) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {quantity > 1 ? (
          <div className="arrow" onClick={() => removeItem(cartItem)}>
            &#10094;
          </div>
        ) : null}
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
