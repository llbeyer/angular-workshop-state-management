import {createAction, props} from "@ngrx/store";
import {Product} from "../models/product.model";

/** Products */

export const loadProducts = createAction(
  '[Shop] Load Products',
);

export const loadProductsSuccess = createAction(
  '[Shop] Load Products Success',
  props<{ products: Product[] }>(),
);

export const loadProductsFailure = createAction(
  '[Shop] Load Products Failure',
  props<{ error: any }>(),
);

/** Cart */

export const addCartItem = createAction(
  '[Shop] Add Cart Item',
  props<{ item: Product }>()
);

export const removeCartItem = createAction(
  '[Shop] Remove Cart Item',
  props<{ id: Product['id'] }>()
);
