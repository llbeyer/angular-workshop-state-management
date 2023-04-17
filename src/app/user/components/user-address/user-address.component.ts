import {Component} from '@angular/core';
import {Address} from "../../models/address.model";
import {UserService} from "../../services/user.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent {

  address$: Observable<Address>;

  constructor(
    private readonly userService: UserService,
  ) {
    this.address$ = this.getAddress();
  }

  private getAddress(): Observable<Address> {
    return this.userService.user$
      .pipe(
        map(user => user.address)
      );
  }
}
