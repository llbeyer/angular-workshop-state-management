import {User} from "./user.model";

export interface Post {
  userId: User['id'];
  id: number;
  title: string;
  body: string;
}
