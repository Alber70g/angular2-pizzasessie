import {Component} from 'angular2/core';

import {PostsListComponent} from './components/postsList';
import {NavigationComponent} from './components/navigation';
import {PostformComponent} from './components/postform';

// Firebase
import 'firebase';

@Component({
    selector: 'my-app',
    template: `
    <navigation></navigation>
    <div class="container">
      <postform></postform>
      <postsList></postsList>
    </div>
    `,
    directives: [PostformComponent, NavigationComponent, PostsListComponent ]
})

export class AppComponent {
    
}
