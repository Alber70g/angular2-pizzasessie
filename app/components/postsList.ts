import { Component, OnInit } from 'angular2/core';

import * as models from '../models';

import { PostComponent } from '../components/post';
import { FirebaseEventPipe } from '../pipe/firebase';

@Component({
    selector: 'postsList',
    template: `
    <label>Title <input [(ngModel)]="_newPost.title" /></label>
    <label>Url <input [(ngModel)]="_newPost.url" /></label>
    <label>Author <input [(ngModel)]="_newPost.author" /></label>
    <button (click)="submitNewPost(_newPost)">Submit</button>
    <ul>
        <post *ngFor="#post of _firebaseUrl | firebaseevent:'child_added'" [post]="post"></post>
    </ul>
    `,
    directives: [PostComponent],
    pipes: [FirebaseEventPipe]
})
export class PostsListComponent implements OnInit {
    public posts: models.Post[];
    private _firebaseUrl: string;    
    private _postsRef: Firebase;
    private _newPost: models.Post;
    
    constructor() {
      this._firebaseUrl = "https://angular2-pizzasessie.firebaseio.com/posts"; 
      this._postsRef = new Firebase(this._firebaseUrl);
      this._newPost = new models.Post();
      this._newPost.voteCount = 0;
    }
    
    submitNewPost(post: models.Post) {
      this._postsRef.push(post);
    }

    ngOnInit() { }

}