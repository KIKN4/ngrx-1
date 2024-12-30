import {Component, Input} from '@angular/core';
import {User} from '../../../entity/user.interface';
import {Observable} from 'rxjs';
import {AsyncPipe, CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'user-card',
  styleUrls: ['./user-card.component.css'],
  templateUrl: './user-card.component.html',
  imports: [
    AsyncPipe,
    CommonModule,
    NgIf,
  ]
})
export class UserCardComponent{
  @Input() user!: User;
}
