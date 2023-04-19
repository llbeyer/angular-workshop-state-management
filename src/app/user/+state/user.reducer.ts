import {User} from "../models/user.model";
import {createReducer, on} from "@ngrx/store";
import {initialShopState} from "../../shop/+state/shop.reducer";
import {
  loadUser,
  loadUserComments,
  loadUserCommentsFailure,
  loadUserCommentsSuccess,
  loadUserFailure,
  loadUserSuccess
} from "./user.actions";
import {Comment} from "../models/comment.model";

export interface UserState {
  user: User | undefined;
  comments: Comment[];
}

export const initialUserState: UserState = {
  user: undefined,
  comments: [],
}

export const USER_FEATURE_KEY = 'user';


export const userReducer = createReducer(
  initialShopState,
  on(loadUser, (state) => ({
    ...state,
    user: undefined,
    comments: [],
  })),
  on(loadUserSuccess, (state, {user}) => ({
    ...state,
    user,
  })),
  on(loadUserFailure, (state, {error}) => ({
    ...state,
    user: undefined,
  })),
  on(loadUserComments, (state) => ({
    ...state,
    user: undefined,
    comments: [],
  })),
  on(loadUserCommentsSuccess, (state, {comments}) => ({
    ...state,
    comments,
  })),
  on(loadUserCommentsFailure, (state, {error}) => ({
    ...state,
    user: undefined,
    comments: [],
  })),
);
