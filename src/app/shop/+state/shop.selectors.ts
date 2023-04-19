import {SHOP_FEATURE_KEY, ShopState} from "./shop.reducer";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const selectShopFeature = createFeatureSelector<ShopState>(SHOP_FEATURE_KEY);

export const selectProducts = createSelector(
  selectShopFeature,
  (state: ShopState) => state.products,
);

export const selectCartItems = createSelector(
  selectShopFeature,
  (state: ShopState) => state.cartItems,
);

export const selectItemsCount = createSelector(
  selectShopFeature,
  (state: ShopState) => state.cartItems.length,
);

export const selectTotalPrice = createSelector(
  selectShopFeature,
  (state: ShopState) => {
    const price = state.cartItems
      .slice()
      .map(product => product.price)
      .reduce((previous, current) => previous + current, 0);

    return (Math.round(price * 100) / 100);
  },
);
