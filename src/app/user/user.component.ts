import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../+state/app.reducer";
import {loadUser, loadUserComments} from "./+state/user.actions";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.fetchUser();
    this.fetchComments();
  }

  private fetchUser(): void {
    this.store.dispatch(loadUser());
  }

  private fetchComments(): void {
    this.store.dispatch(loadUserComments());
  }
}
