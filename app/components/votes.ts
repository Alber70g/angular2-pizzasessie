import { Component, Input, Output, OnInit } from 'angular2/core';

@Component({
  selector: 'votes',
  template: `
      <div>
          <span class="upvote" (click)="vote(+1)">^</span>
          <span [class]="(voteCount >= 0) ? 'positiveVote' : 'negativeVote'">{{voteCount}}</span>
          <span class="downvote" (click)="vote(-1)">v</span>
      </div>
    `,
  styles: [`
      .positiveVote {
        color: white;
        background-color: green;        
      }
      
      .negativeVote {
        color: white;
        background-color: red;        
      }
    `]
})
export class VotesComponent implements OnInit {
  myVote: number = 0;
  _ref: Firebase;

  @Input() voteCount: number;

  vote(voteCount: number) {
    if (voteCount > 0) {
      if (this.myVote < 1) {
        this.myVote = this.myVote + voteCount;
        this.voteCount = this.voteCount + voteCount;
        this._ref.update({})
      }
    } else {
      if (this.myVote > -1) {
        this.myVote = this.myVote + voteCount;
        this.voteCount = this.voteCount + voteCount;
      }
    }
  }

  ngOnInit() { }
}
