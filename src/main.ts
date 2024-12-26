import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app/app.routes';
import {provideStore} from '@ngrx/store';
import {appReducers, metaReducers} from './store/app.reducer';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {TodoEffect} from './app/todos/todo-state/todo.effect';
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore(appReducers, {metaReducers}),
    provideStoreDevtools({maxAge: 25}),
    provideEffects([TodoEffect]),
    provideHttpClient()
  ],
});
