import { Component, Inject } from 'angular2/core';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

import * as models from '../models';
import { PostComponent } from '../components/post';

@Component({
  selector: 'postsList',
  template: `    
    <ul class="collection with-header">
      <li class="collection-header"><h4>Posts</h4></li>
      <post *ngFor="#post of posts | async" [post]="post" [disableAlert]="!disableAlert"></post>
      <label>Disable alert<input type="checkbox" [(ngModel)]="disableAlert" /></label>
    </ul>
    `,
  directives: [PostComponent],
  pipes: []
})
export class PostsListComponent {
  posts: Observable<any[]>;

  constructor(af: AngularFire) {
    this.posts = af.database.list('/posts');
  }
}