import {Injectable} from '@angular/core';
import {Product} from "../models/product.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  products: Product[] = [];

  cartItems: Product[] = [];

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  fetchProducts(): void {
    this.http.get<Product[]>('https://fakestoreapi.com/products')
      .subscribe({
        next: (products) => this.products = products,
      })
  }

  addCartItem(item: Product): void {
    this.cartItems.push(item);
  }

  removeCardItem(id: Product['id']): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
  }

}
