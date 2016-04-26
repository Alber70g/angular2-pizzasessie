import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

// Firebase
import 'firebase';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

import {enableProdMode} from 'angular2/core'; 
enableProdMode();



bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://angular2-playground.firebaseio.com')
]);
