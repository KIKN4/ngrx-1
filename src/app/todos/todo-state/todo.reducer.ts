import {createReducer, on} from '@ngrx/store';
import {TodoActions} from './todo.action';
import {initialState, TodoState} from '../../../store/state';
import {TodoItem} from '../entity/todo.interface';

export const TodoReducer =
  createReducer(
    initialState,
    on(
      TodoActions.getResponse,
      (state, {list}) => ({...state, list})
    ),
    on(
      TodoActions.postResponse,
      (state: TodoState, {body}) => {
        const updatedBody: any = [...state.list];
        updatedBody.push(body);
        return {...state, list: updatedBody}
      }
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


