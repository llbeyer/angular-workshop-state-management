import {Component, OnInit} from '@angular/core';
import {ShopService} from "../../services/shop.service";
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.scss']
})
export class ShopCartComponent implements OnInit {

  count: number | undefined;
  totalPrice: number | undefined;

  items: Product[] = [];

  constructor(
    private readonly shopService: ShopService,
  ) {
  }

  ngOnInit() {
    this.count = this.getCount();
    this.totalPrice = this.getTotalPrice();

    setInterval(() => {
      this.items = this.shopService.cartItems;
    }, 1000)
  }

  private getCount() {
    return this.shopService.cartItems.length;
  }

  private getTotalPrice(): number {
    return this.shopService.cartItems
      .slice()
      .map(item => item.price)
      .reduce((previous, current) => previous + current, 0);
  }
}
