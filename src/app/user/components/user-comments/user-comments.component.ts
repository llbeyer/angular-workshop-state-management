import {Component, Input} from '@angular/core';
import {Comment} from "../../models/comment.model";

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  @Input()
  comments: Comment[] = [];
}
