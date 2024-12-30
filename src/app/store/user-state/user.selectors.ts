import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {UserState} from './entity/user.interface';
import {User} from '../../shared/entity/user.interface';

export const userState: MemoizedSelector<any, UserState> = createFeatureSelector<UserState>('user');

export const usersListSelector = createSelector(
  userState,
  (state: UserState) => state.list
)

export const userSelector = createSelector(
  userState,
  (state: UserState) => state.user as User
);

export const userPostsSelector = createSelector(
  userState,
  (state: UserState) => state.posts
)

