import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Todo, TodoItem} from '../todos/entity/todo.interface';
import {envoirements} from '../../envoirments/envoirements';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private readonly API_URL = envoirements.api_url;

  constructor(
    private http: HttpClient
  ) {
  }

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/todos`).pipe(
      map(todos => todos || [])  // Handle null/undefined by returning empty array
    );
  }

  post(body: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`${this.API_URL}/todos`, {
      payload: body
    })
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
