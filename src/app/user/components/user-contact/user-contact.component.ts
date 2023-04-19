import {Component} from '@angular/core';
import {User} from "../../models/user.model";
import {select, Store} from "@ngrx/store";
import {map, Observable} from "rxjs";
import {AppState} from "../../../+state/app.reducer";
import {selectUser} from "../../+state/user.selectors";

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
    private readonly store: Store<AppState>,
  ) {
    this.email$ = this.getEmail();
    this.phone$ = this.getPhone();
    this.website$ = this.getWebsite();
  }

  private getEmail(): Observable<User['email']> {
    return this.store
      .pipe(
        select(selectUser),
        map(user => {
          console.log(user)
          return user?.email || ''
        })
      );
  }

  private getPhone(): Observable<User['phone']> {
    return this.store
      .pipe(
        select(selectUser),
        map(user => user?.phone || '')
      );
  }

  private getWebsite(): Observable<User['website']> {
    return this.store
      .pipe(
        select(selectUser),
        map(user => user?.website || '')
      );
  }
}
