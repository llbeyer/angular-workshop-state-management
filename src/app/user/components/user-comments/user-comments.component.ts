import {Component, OnInit} from '@angular/core';
import {Comment} from "../../models/comment.model";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(
    private readonly userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService.fetchUserComments();

    setTimeout(() => {
      this.comments = this.userService.userComments ?? [];
    }, 1000);
  }
}
