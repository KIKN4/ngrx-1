import {createReducer, on} from '@ngrx/store';
import {initialState} from '../../../store/state';
import {DeleteActionResponse, GETActionResponse, PostActionSuccess, PutActionResponse} from './todo.action';

export const TodoReducer =
  createReducer(
    initialState,
    on(
      GETActionResponse,
      (state, {todos}) => ({...state, todos})
    ),
    on(
      PostActionSuccess,
      (state, {body}) => ({...state, body})
    ),
    on(
      PutActionResponse,
      (state, {body}) => ({...state, body})
    ),

    on(
      DeleteActionResponse,
      (state, {id}) => ({...state, id})
    ),
  )


