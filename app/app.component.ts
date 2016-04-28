import {Component} from 'angular2/core';

import {NavigationComponent} from './components/navigation';
import {PostformComponent} from './components/postform';
import {PostsListComponent} from './components/postsList';
import { LoginComponent } from './components/login';
import { AuthStatusComponent } from './components/auth-status';
import { UniquePipeExampleComponent } from './components/unique-pipe-example';

@Component({
  selector: 'my-app',
  template: `
    <navigation></navigation>
    <div class="container">
      <postform class="bordered"></postform>
      <postsList class="bordered"></postsList>
      <login class="bordered"></login>
      <auth-status class="bordered"></auth-status>
      <unique-pipe-example class="bordered"></unique-pipe-example>
    </div>
    `,
  styles: [`
    .bordered {
      border: 1px solid red;
      padding: 10px;
      margin: 10px;
      display: block;
    }
  `],
  directives: [
    PostformComponent,
    NavigationComponent,
    PostsListComponent,
    LoginComponent,
    AuthStatusComponent,
    UniquePipeExampleComponent
  ]
})

export class AppComponent {

}
