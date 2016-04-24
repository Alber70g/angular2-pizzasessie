import { Component, Input, Output, OnInit } from 'angular2/core';
import * as models from '../models';

import {VotesComponent} from '../components/votes';

@Component({
    selector: 'post',
    template: `
    <li>
        <votes [voteCount]="post.voteCount"></votes>
        {{post.author}}:
        <a href="{{post.url}}">{{post.title}}</a>
    </li>
    `,
    directives: [VotesComponent]
})
export class PostComponent implements OnInit {
    @Input() post: models.Post;

    constructor() { }

    ngOnInit() { }

}