import React, { useState, useEffect } from "react";

import collections from "./shop-data";

const Shop = () => {
  const [shop, setShop] = useState(collections);

  useEffect(() => {
    console.log(shop);
  }, [shop]);

  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
};

export default Shop;
