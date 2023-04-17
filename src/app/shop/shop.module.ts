import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import { ShopCartComponent } from './components/shop-cart/shop-cart.component';
import { ShopOverviewComponent } from './components/shop-overview/shop-overview.component';
import { ShopCartItemComponent } from './components/shop-cart-item/shop-cart-item.component';
import { ShopCartActionsComponent } from './components/shop-cart-actions/shop-cart-actions.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ShopComponent,
    ShopCartComponent,
    ShopOverviewComponent,
    ShopCartItemComponent,
    ShopCartActionsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HttpClientModule,
  ]
})
export class ShopModule { }
