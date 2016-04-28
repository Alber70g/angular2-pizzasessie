import { Component, OnInit } from 'angular2/core';
import { UniquePipe } from '../pipes/unique';

@Component({
  selector: 'unique-pipe-example',
  template: `
    <ul>
      <li *ngFor="#item of _list | unique:'id'">
        Id {{item.id}} <br />
        Value {{item.value}}
      </li>
    </ul>
  `,
  pipes: [ UniquePipe ]
})
export class UniquePipeExampleComponent implements OnInit {
  private _list: { id: number, value: string }[] = [];
  constructor() { }

  ngOnInit() {
    this._list = [{
        id: 1,
        value: "first"
      },
      {
        id: 2,
        value: "second"
      },
      {
        id: 3,
        value: "third"
      },
      {
        id: 3,
        value: "third"
      }];

  }

}