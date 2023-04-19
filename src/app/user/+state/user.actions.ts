import {createAction, props} from "@ngrx/store";
import {User} from "../models/user.model";
import {Comment} from "../models/comment.model";

/** User */

export const loadUser = createAction(
  '[User] Load User',
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ user: User }>(),
);

export const loadUserFailure = createAction(
  '[User] Load User Failure',
  props<{ error: any }>(),
);

/** User Comments */

export const loadUserComments = createAction(
  '[User] Load User Comments'
);

export const loadUserCommentsSuccess = createAction(
  '[User] Load User Comments Success',
  props<{ comments: Comment[] }>(),
);

export const loadUserCommentsFailure = createAction(
  '[User] Load User Comments Failure',
  props<{ error: any }>(),
);
