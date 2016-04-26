import { Component, Inject } from 'angular2/core';
import {FirebaseAuth} from 'angularfire2';
@Component({
  selector: 'auth-status',
  template: `
    <div *ngIf="auth | async">You are logged in</div>
    <div *ngIf="!(auth | async)">Please log in</div>
  `
})
export class AuthStatusComponent {
  constructor (@Inject(FirebaseAuth) public auth: FirebaseAuth) {}
}