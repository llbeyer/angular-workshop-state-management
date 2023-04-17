import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {User} from "../models/user.model";
import {Comment} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User>;

  userComments$: Observable<Comment[]>;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.user$ = this.getUser();
    this.userComments$ = this.getUserComments();
  }

  private getUser(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        shareReplay(1)
      );
  }

  private getUserComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/users/1/comments')
      .pipe(
        shareReplay(1),
      );
  }
}
