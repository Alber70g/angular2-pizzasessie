import {Component} from 'angular2/core';

import {PostsListComponent} from './components/postsList';

@Component({
    selector: 'my-app',
    template: `<h1>Posts with Angular 2</h1>
    <postsList></postsList>
    `,
    directives: [ PostsListComponent ]
})

export class AppComponent {
    
}
