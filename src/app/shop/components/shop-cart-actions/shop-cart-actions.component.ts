import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-shop-cart-actions',
  templateUrl: './shop-cart-actions.component.html',
  styleUrls: ['./shop-cart-actions.component.scss']
})
export class ShopCartActionsComponent {

  @Output()
  removed: EventEmitter<void> = new EventEmitter<void>();

  removeItem() {
    console.log('removed item from shopping cart');

    this.removed.emit();
  }
}
