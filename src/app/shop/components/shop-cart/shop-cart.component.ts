import { Component } from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {map, Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent {

  items$: Observable<Product[]>;

  count$: Observable<number>;

  totalPrice$: Observable<number>;


  constructor(
    private readonly shopService: ShopService,
  ) {
    this.items$ = this.getItems();
    this.count$ = this.getCount();
    this.totalPrice$ = this.getTotalPrice();
  }

  private getItems(): Observable<Product[]> {
    return this.shopService.cartItems$;
  }

  private getCount(): Observable<number> {
    return this.shopService.cartItems$
      .pipe(
        map(products => products.length)
      );
  }

  private getTotalPrice(): Observable<number> {
    return this.shopService.cartItems$
      .pipe(
        map(products => products.map(product => product.price)),
        map(products => products.reduce((previous, current) => previous + current, 0)),
        map(totalPrice => Math.round(totalPrice * 100) / 100),
      );
  }
}
