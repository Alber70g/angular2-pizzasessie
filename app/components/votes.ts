import { Component, Input, Output, EventEmitter, OnInit } from 'angular2/core';

@Component({
  selector: 'votes',
  template: `
      <a href="#!" (click)="vote(-1)"><i class="material-icons">thumb_down</i></a>
      <span [class]="(voteCount >= 0) ? 'positiveVote' : 'negativeVote'">{{voteCount}}</span>
      <a href="#!" (click)="vote(+1)"><i class="material-icons">thumb_up</i></a>
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

  @Input() voteCount: number;

  @Output() onVote = new EventEmitter();

  vote(voteCount: number) {
    if (voteCount > 0) {
      if (this.myVote < 1) {
        this.myVote = this.myVote + voteCount;
        this.voteCount = this.voteCount + voteCount;
        this.onVote.next({ vote: voteCount });
      }
    } else {
      if (this.myVote > -1) {
        this.myVote = this.myVote + voteCount;
        this.voteCount = this.voteCount + voteCount;
        this.onVote.next({ vote: voteCount });
      }
    }
  }

  ngOnInit() { }
}
