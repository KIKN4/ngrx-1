import { Routes } from '@angular/router';
import {HomeComponent} from './shared/components/home/home.component';
import {UserPostsComponent} from './pages/posts/user-posts/user-posts.component';
import {AddPostComponent} from './pages/posts/add-post/add-post.component';
import {PostCardComponent} from './shared/components/card/post-card/post-card.component';
import {PostDetailComponent} from './pages/posts/post-detail/post-detail.component';
import {UserDetailComponent} from './pages/users/user-detail/user-detail.component';
import {UsersListComponent} from './pages/users/users-list/users-list.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'new-post', component: AddPostComponent},
  {path: 'posts/:id', component: PostDetailComponent},
  {path: 'posts/user/:id', component: UserPostsComponent},
  {path: 'users', component: UsersListComponent},
  {path: 'users/:id', component: UserDetailComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
