import {Component} from '@angular/core';
import {Product} from "../../models/product.model";
import {select, Store} from "@ngrx/store";
import * as ShopActions from '../../+state/shop.actions';
import {Observable} from "rxjs";
import {selectProducts} from "../../+state/shop.selectors";
import {AppState} from "../../../+state/app.reducer";
import {addCartItem} from "../../+state/shop.actions";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss']
})
export class ShopOverviewComponent {
  products$: Observable<Product[]>;

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.store.dispatch(ShopActions.loadProducts());
    this.products$ = this.store.pipe(select(selectProducts));
  }

  addItemToCart(item: Product) {
    console.log('Added product to shopping cart: ', item);

    this.store.dispatch(addCartItem({ item }));
  }
}
