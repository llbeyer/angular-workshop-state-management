import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {ShopService} from "../../services/shop.service";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss']
})
export class ShopOverviewComponent implements OnInit {
  products: Product[] = [];

  constructor(
    private readonly shopService: ShopService,
  ) {
  }

  ngOnInit() {
    this.shopService.fetchProducts();

    setTimeout(() => {
      this.products = this.shopService.products;
    }, 1000)
  }

  addItemToCart(item: Product) {
    console.log('Added product to shopping cart: ', item);

    this.shopService.addCartItem(item);
  }
}
