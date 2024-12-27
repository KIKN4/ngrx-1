import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs';
import {TodosService} from '../../app/services/todos.service';
import {Todo, TodoItem} from './entity/todo.interface';
import {TodoActions} from './todo.action';

@Injectable()
export class TodoEffect {
  private actions$ = inject(Actions);
  private todosService = inject(TodosService);

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.getRequest),
      mergeMap(() =>
        this.todosService.get().pipe(
          map((list: Todo[]) => TodoActions.getResponse({list})),
        )
      )
    )
  );

  postRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.postRequest),
      mergeMap((body: TodoItem) =>
        this.todosService.post(body).pipe(
          map((body: TodoItem) => TodoActions.postResponse({body})),
        )
      )
    )
  );
}
