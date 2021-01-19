import React, { useState } from "react";

import collections from "./shop-data";

import CollectionPreview from "../../components/collection-preview";

const Shop = () => {
  const [shopItems, setShopItems] = useState(collections);

  return (
    <div className="shop-page">
      {shopItems.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
