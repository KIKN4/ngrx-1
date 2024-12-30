import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../shared/entity/user.interface';
import { userSelector } from '../../../store/user-state/user.selectors';
import { UserActions } from '../../../store/user-state/user.actions';
import { UserCardComponent } from '../../../shared/components/card/user-card/user-card.component';
import {AsyncPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  imports: [
    UserCardComponent,
    AsyncPipe,
    NgIf
  ],
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private route: ActivatedRoute = inject(ActivatedRoute);
  private _store: Store = inject(Store);
  private userId!: number;

  public user$: Observable<User | null> = this._store.select(userSelector);

  ngOnInit() {
    this.userId = Number(this.route.snapshot.params['id']);
    this._store.dispatch(UserActions.getRequest({ id: this.userId }));
  }
}
