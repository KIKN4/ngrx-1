import {ActionReducer} from '@ngrx/store';
import {TodoState} from '../../todo-state/entity/todo.interface';
import {PostState} from '../../posts-state/entity/post.interface';
import {UserState} from '../../user-state/entity/user.interface';

export type AppReducers = {
  todos: ActionReducer<TodoState>;
  posts: ActionReducer<PostState>;
  user: ActionReducer<UserState>;
};

//
// export interface InitialState {
//   todos: TodoState | [];
//   posts: PostState | [];
//   user: UserEffects | {}
// }
//
