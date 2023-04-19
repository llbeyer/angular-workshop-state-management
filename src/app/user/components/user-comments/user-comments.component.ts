import { Component } from '@angular/core';
import {Comment} from "../../models/comment.model";
import {select, Store} from "@ngrx/store";
import {AppState} from "../../../+state/app.reducer";
import {selectUserComments} from "../../+state/user.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  comments$: Observable<Comment[]>;

  constructor(
    private readonly store: Store<AppState>
  ) {
    this.comments$ = this.getComments();
  }

  private getComments() {
    return this.store.pipe(select(selectUserComments))
  }
}
