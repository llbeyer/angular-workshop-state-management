import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/user.model";
import {Observable} from "rxjs";
import {Comment} from "./models/comment.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user$: Observable<User>;
  userComments$: Observable<Comment[]>;

  constructor(
    private readonly http: HttpClient,
  ) {
    this.user$ = this.getUser();
    this.userComments$ = this.getUserComments();
  }

  private getUser(): Observable<User> {
    return this.http.get<User>('https://jsonplaceholder.typicode.com/users/1');
  }

  private getUserComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/users/1/comments');
  }
}
