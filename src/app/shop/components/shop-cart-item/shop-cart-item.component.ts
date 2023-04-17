import { Component } from '@angular/core';
import {Product} from "../../models/product.model";

@Component({
  selector: 'app-shop-cart-item',
  templateUrl: './shop-cart-item.component.html',
  styleUrls: ['./shop-cart-item.component.scss']
})
export class ShopCartItemComponent {

  item: Product | undefined;

}
