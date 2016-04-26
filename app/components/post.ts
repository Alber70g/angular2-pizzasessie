import { EventEmitter, Component, Input, Output, OnInit } from 'angular2/core';
import * as models from '../models';

import {VotesComponent} from '../components/votes';

@Component({
    selector: 'post',
    template: `
    <li class="collection-item">
        <p>
          <votes [voteCount]="post.voteCount" (onVote)="onVote($event)"></votes>
          <a href="{{post.url}}">{{post.title}}</a> <i>{{post.author}}</i>
        </p>
    </li>
    `,
    directives: [VotesComponent]
})
export class PostComponent implements OnInit {
    @Input() post: models.Post;
    @Input() disableAlert: boolean;

    ngOnInit() { }

    onVote(vote: {vote: number}) {
      if(!!this.disableAlert){
        alert(`Thank you for your vote (${(vote.vote > 0) ? '+'+vote.vote : vote.vote})`);
      }
    }
}