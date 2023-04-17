import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-cart-actions',
  templateUrl: './shop-cart-actions.component.html',
  styleUrls: ['./shop-cart-actions.component.scss']
})
export class ShopCartActionsComponent {

  itemIndex: number | undefined;

  removeItem() {
    console.log('removed item from shopping cart: ', this.itemIndex);
  }
}
