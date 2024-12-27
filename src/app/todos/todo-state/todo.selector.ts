// Select the entire feature state
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {TodoState} from '../../../store/state';

export const todoState: MemoizedSelector<any, any> = createFeatureSelector<TodoState>('todos');

// Select the list property from the state
export const todoSelector = createSelector(
  todoState,
  (state: TodoState) => state
);

