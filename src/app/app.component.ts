import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {GETActionRequest} from './todos/todo-state/todo.action';
import {todoSelector} from './todos/todo-state/todo.selector';
import {Observable} from 'rxjs';
import {Todo} from './todos/entity/todo.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'untitled1';
  public todos$!: Observable<Todo[]>

  constructor(
    private _store: Store,
  ) {
  }

  ngOnInit() {
    this.todos$ = this._store.select(todoSelector);
    this.todos$.subscribe(console.log)
  }


  get() {
    this._store.dispatch(GETActionRequest())
  }

  post() {

  }

  put() {

  }

  delete() {

  }

  protected readonly todoSelector = todoSelector;
}
