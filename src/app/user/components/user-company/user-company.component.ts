import { Component } from '@angular/core';
import {Company} from "../../models/company.models";
import {UserService} from "../../services/user.service";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent {
  company$: Observable<Company>;

  constructor(
    private readonly userService: UserService,
  ) {
    this.company$ = this.getCompany();
  }

  private getCompany(): Observable<Company> {
    return this.userService.user$
      .pipe(
        map(user => user.company)
      );
  }
}
