import {createAction, props} from '@ngrx/store';
import {TodoEnum} from '../entity/todo.enum';
import {Todo, TodoItem} from '../entity/todo.interface';

export const GETActionRequest =
  createAction(TodoEnum.GET_REQUEST)

export const GETActionResponse =
  createAction(TodoEnum.GET_RESPONSE, props<{ todos: Todo[] | []}>())

export const PostActionRequest =
  createAction(TodoEnum.POST, props<{ body: TodoItem }>())

export const PostActionSuccess =
  createAction(TodoEnum.POST, props<{ body: TodoItem }>())

export const PutActionRequest =
  createAction(TodoEnum.PUT, props<{ body: TodoItem }>())

export const PutActionResponse =
  createAction(TodoEnum.PUT, props<{ body: TodoItem }>())

export const DeleteActionRequest =
  createAction(TodoEnum.DELETE, props<{ id: number }>())

export const DeleteActionResponse =
  createAction(TodoEnum.DELETE, props<{ id: number }>())

