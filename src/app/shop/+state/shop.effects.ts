import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadProducts, loadProductsFailure, loadProductsSuccess} from "./shop.actions";
import {catchError, map, of, switchMap} from "rxjs";
import {Product} from "../models/product.model";

@Injectable()
export class ShopEffects {

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() => this.http.get<Product[]>('https://fakestoreapi.com/products')),
      map(products => loadProductsSuccess({products})),
      catchError(error => of(loadProductsFailure({error})))
    )
  );

  constructor(
    private readonly http: HttpClient,
    private readonly actions$: Actions,
  ) {
  }
}
