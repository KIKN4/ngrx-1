import {ActionReducer, MetaReducer} from '@ngrx/store';
import {hydrationMetaReducer} from './hydra';
import {TodoReducer} from '../app/todos/todo-state/todo.reducer';
import {TodoState} from './state';

export type AppReducers = {
  todos: ActionReducer<TodoState>;
};

export const appReducers: AppReducers = {
  todos: TodoReducer,
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
