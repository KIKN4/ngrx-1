import {ActionCreator, createAction, props} from '@ngrx/store';
import {TodoEnum} from './entity/todo.enum';
import {Todo, TodoItem} from './entity/todo.interface';


const getRequest: ActionCreator<string, any> =
  createAction(TodoEnum.GET_REQUEST)

const getResponse: ActionCreator<string, any> =
  createAction(TodoEnum.GET_RESPONSE, props<{ list: Todo[] | [] }>())

const postRequest: ActionCreator<string, any> =
  createAction(TodoEnum.POST_REQUEST, props<{ body: TodoItem }>())

const postResponse: ActionCreator<string, any> =
  createAction(TodoEnum.POST_RESPONSE, props<{ body: TodoItem }>());

const putRequest: ActionCreator<string, any> =
  createAction(TodoEnum.PUT_REQUEST, props<{ body: TodoItem }>())

const putResponse: ActionCreator<string, any> =
  createAction(TodoEnum.PUT_RESPONSE, props<{ body: TodoItem }>())

const deleteRequest: ActionCreator<string, any> =
  createAction(TodoEnum.DELETE_REQUEST, props<{ id: number }>())

const deleteResponse: ActionCreator<string, any> =
  createAction(TodoEnum.DELETE_RESPONSE, props<{ id: number }>())


type TodoActionsTypes = {
  getRequest: typeof getRequest,
  getResponse: typeof getResponse,
  postRequest: typeof postRequest,
  postResponse: typeof postResponse,
  putRequest: typeof putRequest,
  putResponse: typeof putResponse,
  deleteRequest: typeof deleteRequest,
  deleteResponse: typeof deleteResponse,
}


export const TodoActions: TodoActionsTypes = {
  getRequest,
  getResponse,
  postRequest,
  postResponse,
  putRequest,
  putResponse,
  deleteRequest,
  deleteResponse,
};
