import { Component } from '@angular/core';
import {User} from "../../models/user.model";
import {map, Observable} from "rxjs";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent {

  email$: Observable<User['email']>;
  phone$: Observable<User['phone']>;
  website$: Observable<User['website']>;


  constructor(
    private readonly userService: UserService,
  ) {
    this.email$ = this.getEmail();
    this.phone$ = this.getPhone();
    this.website$ = this.getWebsite();
  }

  private getEmail(): Observable<User['email']> {
    return this.userService.user$
      .pipe(
        map(user => user.email)
      );
  }

  private getPhone(): Observable<User['phone']> {
    return this.userService.user$
      .pipe(
        map(user => user.phone)
      );
  }

  private getWebsite(): Observable<User['website']> {
    return this.userService.user$
      .pipe(
        map(user => user.website)
      );
  }

}
