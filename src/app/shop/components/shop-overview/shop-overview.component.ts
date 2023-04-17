import {Component} from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss']
})
export class ShopOverviewComponent {
  products: Product[] = [];

  addItemToCart(item: Product) {
    console.log('Added product to shopping cart: ', item);
  }
}
