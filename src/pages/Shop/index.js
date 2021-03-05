import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../../components/collection-preview";
import { selectShopItems } from "../../redux/shop/shop.selectors";

const Shop = ({ shop }) => {
  return (
    <div className="shop-page">
      {shop.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({ shop: selectShopItems });

export default connect(mapStateToProps)(Shop);
