import {createReducer, on} from '@ngrx/store';
import {PostActions} from './post.actions';
import {postInitialState, PostState} from './entity/post.interface';
import {todoInitialState} from '../todo-state/entity/todo.interface';

export const postReducer =
  createReducer(
    postInitialState,
    on(
      PostActions.getResponse,
      (state, {list}) => ({...state, list})
    ),
    on(
      PostActions.postResponse,
      (state: PostState, {body}) => {
        const updatedBody: any = [...state.list];
        updatedBody.push(body);
        return {...state, list: updatedBody}
      }
    ),
    on(
      PostActions.putResponse,
      (state, {body}) => ({...state, body})
    ),

    on(
      PostActions.deleteResponse,
      (state, {id}) => ({...state, id})
    ),
  )


