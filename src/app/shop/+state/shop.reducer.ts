import {Product} from "../models/product.model";
import {createReducer, on} from "@ngrx/store";
import {addCartItem, loadProducts, loadProductsFailure, loadProductsSuccess, removeCartItem} from "./shop.actions";

export interface ShopState {
  cartItems: Product[];
  products: Product[];
}

export const initialShopState: ShopState = {
  cartItems: [],
  products: [],
}

export const SHOP_FEATURE_KEY = 'shop';

export const shopReducer = createReducer(
  initialShopState,
  on(loadProducts, (state) => ({
    ...state,
    products: [],
  })),
  on(loadProductsSuccess, (state, {products}) => ({
    ...state,
    products,
  })),
  on(loadProductsFailure, (state, {error}) => ({
    ...state,
    products: [],
  })),

  on(addCartItem, (state, {item}) => ({
    ...state,
    cartItems: [...state.cartItems, item],
  })),
  on(removeCartItem, (state, {id}) => ({
    ...state,
    cartItems: state.cartItems.filter(item =>  item?.id !== id),
  })),
);
