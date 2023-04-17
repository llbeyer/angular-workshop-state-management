import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable, shareReplay} from "rxjs";
import {Product} from "../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products$: Observable<Product[]>;

  cartItems$: Observable<Product[]>;

  private _cartItems$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  constructor(
    private readonly http: HttpClient,
  ) {
    this.cartItems$ = this._cartItems$.asObservable();
    this.products$ = this.getProducts();
  }

  addCartItem(item: Product) {
    const currentValue = this._cartItems$.value.slice();
    this._cartItems$.next([...currentValue, item])
  }

  removeCartItem(id: Product['id']) {
    const currentValue = this._cartItems$.value.slice();
    const filteredValue = currentValue.filter(product => product.id !== id);
    this._cartItems$.next(filteredValue);
  }

  private getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
      .pipe(
        shareReplay(1),
      );
  }
}
