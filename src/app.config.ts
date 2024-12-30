import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {routes} from './app/app.routes';
import {provideRouter} from '@angular/router';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideStore} from '@ngrx/store';
import {appReducers, metaReducers} from './app/store/app-state/app.reducer';
import {provideEffects} from '@ngrx/effects';
import {TodoEffect} from './app/store/todo-state/todo.effect';
import {provideHttpClient} from '@angular/common/http';
import {PostsEffects} from './app/store/posts-state/posts.effects';
import {UserEffects} from './app/store/user-state/user.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStoreDevtools({
      maxAge: 25,
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore(appReducers, { metaReducers }),
    provideStoreDevtools({ maxAge: 25 }),
    provideEffects([TodoEffect, PostsEffects, UserEffects]),
    provideHttpClient()
  ],
}
