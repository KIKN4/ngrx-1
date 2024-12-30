import {inject, Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user.service';
import {UserActions} from './user.actions';
import {map, mergeMap} from 'rxjs';
import {User} from '../../shared/entity/user.interface';
import {PostItem} from '../posts-state/entity/post.interface';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService)

  getUsersRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUsersRequest),
      mergeMap(() => this.userService.get().pipe(
        map((users: User[]) => UserActions.getUsersResponse({users})),
      ))
    )
  )

  getRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getRequest),
      mergeMap((action: { id: number }) =>
        this.userService.getUser(action.id).pipe(
          map((users: User[]) => {
            const user = users[0];
            return UserActions.getResponse({user});
          })
        )
      )
    ));

  getUserPostsRequest$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.getUserPostsRequest),
      mergeMap((action: { userId: number }) =>
        this.userService.getUserPosts(action.userId).pipe(
          map((posts: PostItem[]) =>
            UserActions.getUserPostsResponse({list: posts})
          )
        )
      )
    )
  );

}
