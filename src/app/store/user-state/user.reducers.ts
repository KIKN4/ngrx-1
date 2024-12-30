import {createReducer, on} from '@ngrx/store';
import {userInitialState, UserState} from './entity/user.interface';
import {UserActions} from './user.actions';

export const userReducer = createReducer(
  userInitialState,
  on(
    UserActions.getUsersResponse,
    (state: UserState, {users}) => ({
      ...state,
      list: users
    })
  ),
  on(
    UserActions.getResponse,
    (state, {user}) => ({
      ...state,
      user
    })
  ),
  on(
    UserActions.getUserPostsResponse,
    (state, {list}) => ({
      ...state,
      posts: list,
    })
  )
);

