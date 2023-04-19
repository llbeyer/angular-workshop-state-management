import {Component} from '@angular/core';
import {Company} from "../../models/company.models";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../+state/app.reducer";
import {selectUserCompany} from "../../+state/user.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-company',
  templateUrl: './user-company.component.html',
  styleUrls: ['./user-company.component.scss']
})
export class UserCompanyComponent {
  company$: Observable<Company | undefined>;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.company$ = this.getCompany();
  }

  private getCompany() {
    return this.store.pipe(select(selectUserCompany))
  }
}
