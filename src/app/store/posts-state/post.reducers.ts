import {createReducer, on} from '@ngrx/store';
import {PostActions} from './post.actions';
import {postInitialState, PostItem, PostState} from './entity/post.interface';
import {todoInitialState} from '../todo-state/entity/todo.interface';

export const postReducer =
  createReducer(
    postInitialState,
    on(
      PostActions.getResponse,
      (state: PostState, {list}) => {
        const combinedList = [...state.list, ...list.filter((post: PostItem) =>
            !state.list.some((existingPost: PostItem) => existingPost.id === post.id))
        ];
        return { ...state, list: combinedList };
      }
    ),
    on(
      PostActions.getPostDetailResponse,
      (state: PostState, {post})=> {
        return {...state, postDetail: post}
      }
    ),
    on(
      PostActions.postResponse,
      (state: PostState, {body}) => {
        const {type, ...cleanBody} = body;
        const updatedBody: any = [...state.list];
        updatedBody.push(cleanBody);
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


