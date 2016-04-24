import { Component, OnInit } from 'angular2/core';

import { PostsService } from '../services/posts';

import { PostComponent } from '../components/post';

import * as models from '../models';

@Component({
    selector: 'postsList',
    template: `
    <ul>
        <post *ngFor="#post of _postsService.get()" [post]="post"></post>
    </ul>
    `,
    directives: [PostComponent],
    providers: [PostsService]
})
export class PostsListComponent implements OnInit {
    // public posts: models.Post[];
    
    constructor(private _postsService: PostsService) { }

    ngOnInit() { 
        // this.posts = this._postsService.get();
    }

}