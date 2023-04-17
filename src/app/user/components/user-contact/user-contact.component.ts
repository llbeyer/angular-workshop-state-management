import { Component } from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent {

  email: User['email'] | undefined;
  phone: User['phone'] | undefined;
  website : User['website'] | undefined;
}
