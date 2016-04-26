import {Component} from 'angular2/core';

import {NavigationComponent} from './components/navigation';
import {PostformComponent} from './components/postform';
import {PostsListComponent} from './components/postsList';
import { LoginComponent } from './components/login';
import { AuthStatusComponent } from './components/auth-status';

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <div class="container">
      <postform></postform>
      <postsList></postsList>
      <login></login>
      <auth-status></auth-status>
    </div>
    `,
  directives: [
    PostformComponent,
    NavigationComponent,
    PostsListComponent,
    LoginComponent,
    AuthStatusComponent
  ]
})

export class AppComponent {

}
