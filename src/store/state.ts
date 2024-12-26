import {Todo} from '../app/todos/entity/todo.interface';
import {TodoReducer} from '../app/todos/todo-state/todo.reducer';


export const initialState: IState = {
  todos: []
}

export interface IState {
  todos: Todo[] | []
}

export const appReducer = {
  todos: TodoReducer
}
