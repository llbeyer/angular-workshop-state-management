import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {
  loadUser,
  loadUserComments,
  loadUserCommentsFailure,
  loadUserCommentsSuccess,
  loadUserFailure,
  loadUserSuccess
} from "./user.actions";
import {User} from "../models/user.model";
import {Comment} from "../models/comment.model";

@Injectable()
export class UserEffects {

  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUser),
      switchMap(() => this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')),
      map(user => loadUserSuccess({user})),
      catchError(error => of(loadUserFailure({error})))
    )
  );

  loadUserComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUserComments),
      switchMap(() => this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/users/1/comments')),
      map(comments => loadUserCommentsSuccess({comments})),
      catchError(error => of(loadUserCommentsFailure({error})))
    )
  );


  constructor(
    private readonly http: HttpClient,
    private readonly actions$: Actions,
  ) {
  }
}
