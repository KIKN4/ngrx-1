import {createReducer, on} from '@ngrx/store';
import {initialState} from '../../../store/state';
import {TodoActions} from './todo.action';

export const TodoReducer =
  createReducer(
    initialState,
    on(
      TodoActions.getResponse,
      (state, {list}) => ({...state, list})
    ),
    on(
      TodoActions.postResponse,
      (state, {body}) => ({...state, body})
    ),
    on(
      TodoActions.putResponse,
      (state, {body}) => ({...state, body})
    ),

    on(
      TodoActions.deleteResponse,
      (state, {id}) => ({...state, id})
    ),
  )


