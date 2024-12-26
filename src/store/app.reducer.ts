import {ActionReducer, MetaReducer} from '@ngrx/store';
import {IState} from './state';
import {hydrationMetaReducer} from './hydra';
import {TodoReducer} from '../app/todos/todo-state/todo.reducer';

export type AppReducers = {
  todos: ActionReducer<IState>;
};

export const appReducers: AppReducers = {
  todos: TodoReducer,
}

export const metaReducers: MetaReducer[] = [hydrationMetaReducer]
