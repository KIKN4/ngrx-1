import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UserActions} from '../../../store/user-state/user.actions';
import {AsyncPipe, CommonModule} from '@angular/common';
import {PostCardComponent} from '../../../shared/components/card/post-card/post-card.component';
import {UserCardComponent} from '../../../shared/components/card/user-card/user-card.component';
import {Observable} from 'rxjs';
import {User} from '../../../shared/entity/user.interface';
import {usersListSelector} from '../../../store/user-state/user.selectors';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  imports: [
    AsyncPipe,
    PostCardComponent,
    UserCardComponent,
    CommonModule
  ],
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  private store: Store = inject(Store);
  public users$: Observable<User[] | []> = this.store.select(usersListSelector);

  ngOnInit() {
    this.store.dispatch(UserActions.getUsersRequest())
  }

}
