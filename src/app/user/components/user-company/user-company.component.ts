import { Component } from '@angular/core';
import {Address} from "../../models/address.model";
import {Company} from "../../models/company.models";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent {
  company: Company | undefined;
}
