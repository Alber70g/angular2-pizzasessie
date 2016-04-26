import { Component, OnInit } from 'angular2/core';
import * as models from '../models';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'postform',
  template: `
    <h3>Add a post</h3>
    <div class="row">
      <form materialize class="col s12">
        <div class="row">
          <div class="input-field col s6">
            <input id="title" [(ngModel)]="_newPost.title" />
            <label for="title">Title</label>
          </div>
          <div class="input-field col s6">
          <input [(ngModel)]="_newPost.url" />
            <label>Url</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input [(ngModel)]="_newPost.author" />
            <label>Your name</label>     
          </div>
          <div class="input-field col s6">
            <button class="waves-effect waves-light btn" (click)="submitNewPost(_newPost)">Submit</button>
          </div>
        </div>
        <div class="row">
          
        </div>
      </form>
    </div>
  `
})
export class PostformComponent {
  _newPost: models.Post = new models.Post();
  
  public posts: models.Post[];
  
  private _posts: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this._posts = af.database.list('/posts');
    
    this._newPost.voteCount = 0;
  }

  submitNewPost(post: models.Post) {
    this._posts.push(post);
  }
}