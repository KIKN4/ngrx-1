import {ActionReducer, MetaReducer} from '@ngrx/store';
import {hydrationMetaReducer} from './hydra';
import {TodoState} from '../todo-state/entity/todo.interface';
import {postReducer} from '../posts-state/post.reducers';
import {todoReducer} from '../todo-state/todo.reducer';
import {PostState} from '../posts-state/entity/post.interface';

export type AppReducers = {
  todos: ActionReducer<TodoState>;
  posts: ActionReducer<PostState>;
};

export const appReducers: AppReducers = {
  todos: todoReducer,
  posts: postReducer,
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
