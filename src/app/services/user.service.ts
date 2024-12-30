import {inject, Injectable} from '@angular/core';
import {environments} from '../shared/environents/envoirements';
import {map, Observable} from 'rxjs';
import {User} from '../shared/entity/user.interface';
import {HttpClient} from '@angular/common/http';
import {PostItem} from '../store/posts-state/entity/post.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly API_URL = environments.api_url;
  private readonly http = inject(HttpClient)


  get(): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users`)
  }

  getUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${this.API_URL}/users?id=${id}`)
  }

  getUserPosts(userId: number): Observable<PostItem[]> {
    return this.http.get<PostItem[]>(`${this.API_URL}/posts?userId=${userId}`).pipe(
      map(posts => posts || [])
    )
  }

}
