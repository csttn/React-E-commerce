import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  bones: 888,
  tenis: 10,
  jaquetas: 20,
  mulheres: 30,
  homens: 40,
};

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopItems],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (collections) =>
    collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
