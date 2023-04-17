import { Component } from '@angular/core';
import {Address} from "../../models/address.model";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent {

  address: Address | undefined;

}
