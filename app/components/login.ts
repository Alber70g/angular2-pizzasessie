import { Component, OnInit, Inject } from 'angular2/core';
import { FirebaseAuth } from 'angularfire2';

@Component({
  selector: 'login',
  template: `
    <label for="username" >Username</label>
    <input id="username" [(ngModel)]="creds.username" type="text" />
    <label for="password">Password</label>
    <input id="password" [(ngModel)]="creds.password" type="password" />
    <button (click)="login()">Login</button>
  `
})
export class LoginComponent implements OnInit {
  private creds: any;

  constructor(private fbAuth: FirebaseAuth) { 
    this.creds = {};
  }

  ngOnInit() { }

  login() {
    this.fbAuth.login({email: this.creds.username, password: this.creds.password});
  }

}