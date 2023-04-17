import {Component, EventEmitter, Output} from '@angular/core';
import {Product} from "../../models/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-shop-overview',
  templateUrl: './shop-overview.component.html',
  styleUrls: ['./shop-overview.component.scss']
})
export class ShopOverviewComponent {

  @Output()
  added: EventEmitter<Product> = new EventEmitter<Product>();

  products$: Observable<Product[]>;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.products$ = this.getProducts()
  }

  addItemToCart(item: Product) {
    console.log('Added product to shopping cart: ', item);

    this.added.emit(item);
  }

  private getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
