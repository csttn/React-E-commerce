import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/index";

import "./styles.scss";

function CollectionItem({ item, addItem }) {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="break-image">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">R$ {price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        Add ao carrinho
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
