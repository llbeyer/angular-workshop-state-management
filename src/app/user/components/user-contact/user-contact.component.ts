import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {

  email: User['email'] | undefined;
  phone: User['phone'] | undefined;
  website: User['website'] | undefined;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.fetchUser();

    setTimeout(() => {
      this.email = this.userService.user?.email;
      this.phone = this.userService.user?.phone;
      this.website = this.userService.user?.website;
    }, 1000);
  }

}
