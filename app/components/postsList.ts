import { Component, OnInit } from 'angular2/core';

import * as models from '../models';

import { PostComponent } from '../components/post';
import { FirebaseEventPipe } from '../pipe/firebase';

@Component({
  selector: 'postsList',
  template: `    
    <ul class="collection with-header">
      <li class="collection-header"><h4>Posts</h4></li>
      <post *ngFor="#post of _firebaseUrl | firebaseevent:'child_added'" [post]="post" [disableAlert]="!disableAlert"></post>
      <label>Disable alert<input type="checkbox" [(ngModel)]="disableAlert" /></label>
    </ul>
    `,
  directives: [PostComponent],
  pipes: [FirebaseEventPipe]
})
export class PostsListComponent implements OnInit {
  public posts: models.Post[];
  private _firebaseUrl: string = "https://angular2-pizzasessie.firebaseio.com/posts";
  private _postsRef: Firebase;
  private _newPost: models.Post;

  constructor() {
    this._postsRef = new Firebase(this._firebaseUrl);
    this._newPost = new models.Post();
    this._newPost.voteCount = 0;
  }

  submitNewPost(post: models.Post) {
    this._postsRef.push(post);
  }

  ngOnInit() { }

}