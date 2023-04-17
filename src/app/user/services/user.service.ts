import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {Comment} from "../models/comment.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User | undefined;

  userComments: Comment[] | undefined;

  constructor(
    private readonly http: HttpClient
  ) {
  }

  public fetchUser(): void {
    this.http.get<User>('https://jsonplaceholder.typicode.com/users/1')
      .subscribe({
        next: (user) => this.user = user,
      });
  }

  public fetchUserComments(): void {
    this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/users/1/comments')
      .subscribe({
        next: (comments) => this.userComments = comments,
      });
  }
}
