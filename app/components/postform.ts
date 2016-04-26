import { Component, OnInit } from 'angular2/core';
import * as models from '../models';

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
export class PostformComponent implements OnInit {
  _newPost: models.Post = new models.Post();
  
  public posts: models.Post[];
  private _firebaseUrl: string = "https://angular2-pizzasessie.firebaseio.com/posts";
  private _postsRef: Firebase;

  constructor() {
    this._postsRef = new Firebase(this._firebaseUrl);
    this._newPost.voteCount = 0;
  }

  submitNewPost(post: models.Post) {
    this._postsRef.push(post);
  }
  ngOnInit() { }

}