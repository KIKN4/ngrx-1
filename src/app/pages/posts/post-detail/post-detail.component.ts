import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute, Router} from '@angular/router';
import {PostItem} from '../../../store/posts-state/entity/post.interface';
import {postDetailSelector} from '../../../store/posts-state/posts.selectors';
import {PostActions} from '../../../store/posts-state/post.actions';
import {LoaderComponent} from '../../../shared/components/loader/loader-component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  imports: [
    LoaderComponent
  ],
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private _store = inject(Store);
  private route: ActivatedRoute = inject(ActivatedRoute);
  private router: Router = inject(Router);
  private postId!: number;
  public post: PostItem | null = null;

  ngOnInit() {
    this.postId = Number(this.route.snapshot.params['id']);
    this.getPostById(this.postId);
    this._store.select(postDetailSelector).subscribe(post => {
      this.post = post
    });
  }

  getPostById(id: number) {
    this._store.dispatch(PostActions.getPostDetailRequest({id}));
  }

  navigateUserDetail(userId?: number) {
    this.router.navigate([`/users/${userId}`]);
  }
}
