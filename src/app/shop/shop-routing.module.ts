import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShopOverviewComponent} from "./components/shop-overview/shop-overview.component";
import {ShopCartComponent} from "./components/shop-cart/shop-cart.component";

const routes: Routes = [
  {
    path: 'overview',
    component: ShopOverviewComponent,
  },
  {
    path: 'cart',
    component: ShopCartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
