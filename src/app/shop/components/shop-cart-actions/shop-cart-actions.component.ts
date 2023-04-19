import {Component, Input} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../../+state/app.reducer";
import {removeCartItem} from "../../+state/shop.actions";

@Component({
  selector: 'app-shop-cart-actions',
  templateUrl: './shop-cart-actions.component.html',
  styleUrls: ['./shop-cart-actions.component.scss']
})
export class ShopCartActionsComponent {

  @Input()
  itemId: number | undefined;

  constructor(
    private readonly store: Store<AppState>,
  ) {
  }

  removeItem() {
    console.log('removed item from shopping cart: ', this.itemId);
    if (!this.itemId) return;

    this.store.dispatch(removeCartItem({ id: this.itemId }))
  }
}
