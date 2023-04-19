import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../+state/app.reducer";
import {selectCartItems, selectItemsCount, selectTotalPrice} from "../../+state/shop.selectors";

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
    private readonly store: Store<AppState>,
  ) {
    this.items$ = this.getItems();
    this.count$ = this.getCount();
    this.totalPrice$ = this.getTotalPrice();
  }

  private getItems(): Observable<Product[]> {
    return this.store.pipe(select(selectCartItems));
  }

  private getCount(): Observable<number> {
    return this.store.pipe(select(selectItemsCount));
  }

  private getTotalPrice(): Observable<number> {
    return this.store.pipe(select(selectTotalPrice));
  }
}
