import {Component, Input} from '@angular/core';
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-shop-cart-actions',
  templateUrl: './shop-cart-actions.component.html',
  styleUrls: ['./shop-cart-actions.component.scss']
})
export class ShopCartActionsComponent {

  @Input()
  itemId: number | undefined;

  constructor(
    private readonly shopService: ShopService,
  ) {
  }

  removeItem() {
    console.log('removed item from shopping cart: ', this.itemId);
    if (!this.itemId) return;

    this.shopService.removeCartItem(this.itemId);
  }
}
