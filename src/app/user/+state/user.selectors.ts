import {createFeatureSelector, createSelector} from "@ngrx/store";
import {USER_FEATURE_KEY, UserState} from "./user.reducer";

export const selectUserFeature = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const selectUser = createSelector(
  selectUserFeature,
  (state: UserState) => state.user,
);

export const selectUserCompany = createSelector(
  selectUserFeature,
  (state: UserState) => state.user?.company,
);

export const selectUserAddress = createSelector(
  selectUserFeature,
  (state: UserState) => state.user?.address,
);

export const selectUserComments = createSelector(
  selectUserFeature,
  (state: UserState) => state.comments?.slice(0, 20) || [],
);
