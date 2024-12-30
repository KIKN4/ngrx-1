import {MetaReducer} from '@ngrx/store';
import {hydrationMetaReducer} from './hydra';
import {postReducer} from '../posts-state/post.reducers';
import {todoReducer} from '../todo-state/todo.reducer';
import {AppReducers} from './entity/app-state.interface';
import {userReducer} from '../user-state/user.reducers';

export const appReducers: AppReducers = {
  todos: todoReducer,
  posts: postReducer,
  user: userReducer,
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
