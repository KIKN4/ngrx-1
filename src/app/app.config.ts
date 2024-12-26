import {ApplicationConfig, provideZoneChangeDetection, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideEffects} from '@ngrx/effects';
import {TodoEffect} from './todos/todo-state/todo.effect';
import {appReducers, metaReducers} from '../store/app.reducer';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideStore(appReducers, {metaReducers}),
    provideStoreDevtools({maxAge: 25}),
    provideEffects([TodoEffect]),
    provideHttpClient()
  ]
};
