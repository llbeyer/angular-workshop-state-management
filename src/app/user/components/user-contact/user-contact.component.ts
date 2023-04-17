import {Component, Input} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent {

  @Input()
  email: User['email'] | null = null;
  @Input()
  phone: User['phone'] | null = null;
  @Input()
  website : User['website'] | null = null;
}
