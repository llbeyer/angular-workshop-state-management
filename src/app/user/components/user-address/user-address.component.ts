import {Component, OnInit} from '@angular/core';
import {Address} from "../../models/address.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.scss']
})
export class UserAddressComponent implements OnInit {

  address: Address | undefined;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.fetchUser();

    setTimeout(() => {
      this.address = this.userService.user?.address;
    }, 1000);
  }
}
