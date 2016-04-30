# AngularJs vs Angular playground session

## Presentation AngularJs vs Angular 2

[http://slides.com/albertgroothedde/deck](http://slides.com/albertgroothedde/deck)

## Getting started
0. Clone this repository  
`$ git clone https://github.com/Alber70g/angular2-pizzasessie.git`
0. Install global and local dependencies  
`$ npm run setup`
0. Run  
`$ npm start`

## Add your own Firebase

0. Create an account and a database on http://firebase.com
- Change the url in `boot.ts` and your app-name in `firebase.json`
- Install firebase tools  
`$ npm install -g firebase-tools`
- Run `firebase login` on the commandline, and give access (or `firebase login --interactive`) 
- Run `npm run deploy` inside this directory
