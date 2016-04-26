import { Component, OnInit } from 'angular2/core';

@Component({
  selector: 'navigation',
  template: `
    <nav class="top-nav">
      <div class="nav-wrapper container">
        <a class="brand-logo">Angular 2 Playground</a>
      </div>
    </nav>
  `
})
export class NavigationComponent { }