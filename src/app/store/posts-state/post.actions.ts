import {ActionCreator, createAction, props} from '@ngrx/store';
import {PostEnum} from './entity/post.enum';
import {Post, PostItem} from './entity/post.interface';

const getRequest: ActionCreator<string, any> =
  createAction(PostEnum.GET_REQUEST);

const getResponse: ActionCreator<string, any> =
  createAction(PostEnum.GET_RESPONSE, props<{ list: Post[] | [] }>());

const getPostDetailRequest: ActionCreator<string, any> =
  createAction(PostEnum.GET_POST_REQUEST, props<{ id: number }>());

const getPostDetailResponse: ActionCreator<string, any> =
  createAction(PostEnum.GET_POST_RESPONSE, props<{ post: PostItem }>());

const postRequest: ActionCreator<string, any> =
  createAction(PostEnum.POST_REQUEST, props<{ post: PostItem }>());

const postResponse: ActionCreator<string, any> =
  createAction(PostEnum.POST_RESPONSE, props<{ body: PostItem }>());

const putRequest: ActionCreator<string, any> =
  createAction(PostEnum.PUT_REQUEST, props<{ body: PostItem }>());

const putResponse: ActionCreator<string, any> =
  createAction(PostEnum.PUT_RESPONSE, props<{ body: PostItem }>());

const deleteRequest: ActionCreator<string, any> =
  createAction(PostEnum.DELETE_REQUEST, props<{ id: number }>());

const deleteResponse: ActionCreator<string, any> =
  createAction(PostEnum.DELETE_RESPONSE, props<{ id: number }>());


type PostActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  getPostDetailRequest: typeof getPostDetailRequest,
  getPostDetailResponse: typeof getPostDetailResponse,
  postRequest: typeof postRequest,
  postResponse: typeof postResponse,
  putRequest: typeof putRequest,
  putResponse: typeof putResponse,
  deleteRequest: typeof deleteRequest,
  deleteResponse: typeof deleteResponse,
}


export const PostActions: PostActionsTypes = {
  getRequest,
  getResponse,
  getPostDetailRequest,
  getPostDetailResponse,
  postRequest,
  postResponse,
  putRequest,
  putResponse,
  deleteRequest,
  deleteResponse,
};
