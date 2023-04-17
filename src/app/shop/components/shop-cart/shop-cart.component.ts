import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnChanges {

  @Input()
  items: Product[] = [];

  count: number | undefined;

  totalPrice: number | undefined;

  ngOnChanges(changes: SimpleChanges) {
    this.count = this.calculateCount();
    this.totalPrice = this.calculateTotalPrice();
  }

  private calculateCount(): number {
    return this.items.length;
  }

  private calculateTotalPrice(): number {
    return this.items
      .map(item => item.price)
      .reduce((previous, current) => previous + current, 0);
  }

  removeItem(toRemove: Product) {
    this.items = this.items.filter(item => item.id !== toRemove.id);
  }
}
