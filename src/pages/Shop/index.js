import React from "react";

import collections from "./shop-data";

import CollectionPreview from "../../components/collection-preview";

const Shop = () => {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
