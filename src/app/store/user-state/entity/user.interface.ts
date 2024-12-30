import {User} from '../../../shared/entity/user.interface';
import {PostItem} from '../../posts-state/entity/post.interface';

export interface UserState {
  list: User[] | [];
  user: User | {};
  posts: PostItem[]
}
export const userInitialState: UserState = {
  list: [],
  user: {},
  posts: []
}
