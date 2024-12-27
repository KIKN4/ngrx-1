import {IState} from '../../../store/state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';


export const todoState: MemoizedSelector<any, any> = createFeatureSelector<IState>('todos');

export const todoSelector =
  createSelector(todoState, (state: IState) => state.list)


