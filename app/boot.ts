import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'

import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire, firebaseAuthConfig, AuthProviders, AuthMethods} from 'angularfire2';

// import {enableProdMode} from 'angular2/core'; 
// enableProdMode();

bootstrap(AppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://newfirebaseapp2.firebaseio.com'),
  firebaseAuthConfig({
    provider: AuthProviders.Password,
    method: AuthMethods.Password
  })
]);
