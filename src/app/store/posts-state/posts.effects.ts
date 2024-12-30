import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {PostsService} from '../../services/posts.service';
import {PostActions} from './post.actions';
import {map, mergeMap} from 'rxjs';
import {Post, PostItem} from './entity/post.interface';
import {TodoItem} from '../todo-state/entity/todo.interface';
import {createAction} from '@ngrx/store';

@Injectable()
export class PostsEffects {
  private actions$ = inject(Actions);
  private postsService = inject(PostsService);

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getRequest),
      mergeMap(() =>
        this.postsService.get().pipe(
          map((posts: Post[]) => PostActions.getResponse({list: posts})),
        )
      )
    )
  );

  getPostRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.getPostDetailRequest),
      mergeMap((action: { id: number }) =>
        this.postsService.getPost(action.id).pipe(
          map((post: PostItem) => PostActions.getPostDetailResponse({post})
          )
        )
      )
    )
  )


  postRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.postRequest),
      mergeMap((body: TodoItem) =>
        this.postsService.post(body).pipe(
          map((body: TodoItem) => PostActions.postResponse({body}))
        )
      )
    )
  );

}
