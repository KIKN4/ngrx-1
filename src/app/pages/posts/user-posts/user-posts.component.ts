import {Component, inject, OnInit} from '@angular/core';
import {UserCardComponent} from '../../../shared/components/card/user-card/user-card.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserActions} from '../../../store/user-state/user.actions';
import {userPostsSelector, userSelector} from '../../../store/user-state/user.selectors';
import {Observable} from 'rxjs';
import {User} from '../../../shared/entity/user.interface';
import {PostItem} from '../../../store/posts-state/entity/post.interface';
import {AsyncPipe} from '@angular/common';
import {PostCardComponent} from '../../../shared/components/card/post-card/post-card.component';

@Component({
  selector: 'app-user-posts',
  templateUrl: 'user-posts.component.html',
  imports: [
    UserCardComponent,
    PostCardComponent,
    AsyncPipe,
    PostCardComponent
  ],
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  private _store = inject(Store);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private userId!: number;
  public user$: Observable<User | null> = this._store.select(userSelector);
  public posts$: Observable<PostItem[]> = this._store.select(userPostsSelector);

  ngOnInit() {
    this.userId = Number(this.route.snapshot.params['id']);
    this.getUserById(this.userId);
  }

  getUserById(userId: number) {
    this._store.dispatch(UserActions.getRequest({id: userId}));
    this._store.dispatch(UserActions.getUserPostsRequest({userId}));
  }

  navigate(id: number) {
    this.router.navigate([`posts/${id}`]);
  }

}
