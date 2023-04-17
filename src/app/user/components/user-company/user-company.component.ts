import {Component, OnInit} from '@angular/core';
import {Company} from "../../models/company.models";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent implements OnInit {
  company: Company | undefined;

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.fetchUser();

    setTimeout(() => {
      this.company = this.userService.user?.company;
    }, 1000);
  }
}
