import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { TodosService } from '../../services/todos.service';
import { GETActionRequest, GETActionResponse } from './todo.action';
import { Todo } from '../entity/todo.interface';

@Injectable()
export class TodoEffect {
  private actions$ = inject(Actions);
  private todosService = inject(TodosService);

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GETActionRequest),
      mergeMap(() =>
        this.todosService.get().pipe(
          map((todos: Todo[]) => GETActionResponse({ todos })),
        )
      )
    )
  );
}
