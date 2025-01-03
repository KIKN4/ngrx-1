import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Todo, TodoItem} from '../store/todo-state/entity/todo.interface';
import {environments} from '../shared/environents/envoirements';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly API_URL = environments.api_url;
  private readonly http = inject(HttpClient)

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/todos`).pipe(
      map(todos => todos || [])
    );
  }

  post(body: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`${this.API_URL}/todos`, {body})
  }

  put(body: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.API_URL}/todos`, {
      payload: body
    })
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.API_URL}/todos/${id}`)
  }
}
