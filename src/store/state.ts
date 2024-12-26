import {Todo} from '../app/todos/entity/todo.interface';
import {TodoReducer} from '../app/todos/todo-state/todo.reducer';


export const initialState: IState = {
  list: []
}

export interface IState {
  list: Todo[] | []
}

