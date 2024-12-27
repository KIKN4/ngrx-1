import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {todoSelector} from './todos/todo-state/todo.selector';
import {Observable} from 'rxjs';
import {ActionModel, Todo, TodoItem} from './todos/entity/todo.interface';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TodoActions} from './todos/todo-state/todo.action';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent implements OnInit {
  title = 'untitled1';
  public todos$!: Observable<Todo[]>;

  todoForm!: FormGroup;

  constructor(
    private _store: Store,
    private _fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.todos$ = this._store.select(todoSelector);
    this.todos$.subscribe(console.log)
    this.todoForm = this._fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: [null, Validators.required],
      id: [null],
    });
  }

  handleOperation(operation: ActionModel): void {
    const body: TodoItem = this.todoForm.value;

    if (operation === 'PUT') this._store.dispatch(TodoActions.putRequest({body}))
    else if (operation === 'POST') this._store.dispatch(TodoActions.postRequest({body}))
  }


  get() {
    this._store.dispatch(TodoActions.getRequest())
  }

  post() {

  }

  put() {

  }

  delete() {

  }

  protected readonly ActionModel = ActionModel;
}
