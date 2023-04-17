import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserAddressComponent } from './components/user-address/user-address.component';
import { UserCompanyComponent } from './components/user-company/user-company.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    UserComponent,
    UserDetailsComponent,
    UserAddressComponent,
    UserCompanyComponent,
    UserContactComponent,
    UserCommentsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ]
})
export class UserModule { }
