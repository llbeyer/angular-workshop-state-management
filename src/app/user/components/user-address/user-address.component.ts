import { Component } from '@angular/core';
import {Address} from "../../models/address.model";
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../+state/app.reducer";
import {selectUserAddress} from "../../+state/user.selectors";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent {

  address$: Observable<Address | undefined>;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.address$ = this.getAddress();
  }

  private getAddress() {
    return this.store.pipe(select(selectUserAddress));
  }
}
