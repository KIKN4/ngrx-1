import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environments} from '../shared/environents/envoirements';
import {map, Observable} from 'rxjs';
import {Todo, TodoItem} from '../store/todo-state/entity/todo.interface';
import {PostItem} from '../store/posts-state/entity/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly API_URL = environments.api_url;
  private readonly http = inject(HttpClient)

  get(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.API_URL}/posts`).pipe(
      map(posts => posts || [])
    );
  }

  getPost(id: number): Observable<PostItem> {
    return this.http.get<PostItem>(`${this.API_URL}/posts/${id}`);
  }

  post(body: TodoItem): Observable<TodoItem> {
    return this.http.post<TodoItem>(`${this.API_URL}/posts`, {...body})
  }

  put(body: TodoItem): Observable<TodoItem> {
    return this.http.put<TodoItem>(`${this.API_URL}/posts`, {
      payload: body
    })
  }

  delete(id: number): Observable<number> {
    return this.http.delete<number>(`${this.API_URL}/posts/${id}`)
  }
}
