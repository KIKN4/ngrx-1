import {ActionCreator, createAction, props} from '@ngrx/store';
import {userEnum} from './entity/user.enum';
import {User} from '../../shared/entity/user.interface';
import {PostItem} from '../posts-state/entity/post.interface';

const getUsersRequest: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USERS_REQUEST,
  );

const getUsersResponse: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USERS_RESPONSE,
    props<{ users: User[] }>()
  )

const getRequest: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USER_REQUEST,
    props<{ id: number }>());

const getResponse: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USER_SUCCESS,
    props<{ user: User }>());


const getUserPostsRequest: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USER_POSTS_REQUEST,
    props<{ userId: number }>())

const getUserPostsResponse: ActionCreator<string, any> =
  createAction(
    userEnum.GET_USER_POSTS_RESPONSE,
    props<{ list: PostItem[] | [] }>())


type UserActionsTypes = {
  getUsersRequest: typeof getUsersRequest,
  getUsersResponse: typeof getUsersResponse,
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  getUserPostsRequest: typeof getUserPostsRequest,
  getUserPostsResponse: typeof getUserPostsResponse,
}


export const UserActions: UserActionsTypes = {
  getUsersRequest,
  getUsersResponse,
  getRequest,
  getResponse,
  getUserPostsRequest,
  getUserPostsResponse
}


