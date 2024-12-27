import {TodoState} from '../todo-state/entity/todo.interface';
import {PostState} from '../posts-state/entity/post.interface';

export interface InitialState {
  todos: TodoState | [];
  posts: PostState | [];
}

// export const initialState: InitialState = {
//   todos: [],
//   posts: []
// }
