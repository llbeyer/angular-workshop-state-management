import {createReducer} from "@ngrx/store";

export interface AppState {
}

export const initialState: AppState = {
}

export const appReducer = createReducer(
  initialState,
);

