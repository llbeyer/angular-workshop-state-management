import {Component, Input} from '@angular/core';
import {Company} from "../../models/company.models";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent {
  @Input()
  company: Company | null = null;
}
