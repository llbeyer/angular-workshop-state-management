import {Component} from '@angular/core';
import {Comment} from "../../models/comment.model";
import {UserService} from "../../services/user.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  comments$: Observable<Comment[]>;

  constructor(
    private readonly userService: UserService,
  ) {
    this.comments$ = this.getComments();
  }


  private getComments(): Observable<Comment[]> {
    return this.userService.userComments$;
  }
}
