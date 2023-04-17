import {Component} from '@angular/core';
import {Product} from "../../models/product.model";
import {ShopService} from "../../services/shop.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss']
})
export class ShopOverviewComponent {
  products$: Observable<Product[]>;

  constructor(
    private readonly shopService: ShopService,
  ) {
    this.products$ = this.shopService.products$;
  }

  addItemToCart(item: Product) {
    console.log('Added product to shopping cart: ', item);

    this.shopService.addCartItem(item);
  }


}
