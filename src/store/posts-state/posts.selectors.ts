import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {PostState} from './entity/post.interface';

export const postState: MemoizedSelector<any, any> = createFeatureSelector<PostState>('posts');

export const postSelector = createSelector(
  postState,
  (state: PostState) => state.list
);

