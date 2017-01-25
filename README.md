# Workflow UI

Project consist of two main parts 

1. client app

2. node js server to server all api calls and static files

client angular app is build using angular-cli generator
[angular-cli](https://github.com/angular/angular-cli)


client app and server can be started independently
client app can be started in dev server with live reloading

all the task run using npm scrips define in package.json [scripts] section

Set up development Environment

1. install nodejs
2. verify both node and npm installed by checking there version numbers
   node -v 
   npm -v
3. navigate to project root folder and run 'npm install'
   this will install all project dependencies defined in package.json file in the root directory
    

Run `npm run ng` for start dev server with live reloading

Run `npm run server` for start dev server and nodejs server parallaly and proxy all api call to nodejs server with live reloading

Run `npm start` for deploy client app to nodejs server and start nodejs server like in production


## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Generate Angular js Related source files
when creating new files in the project we can use angular-cli commands to generate them instead of manually creating them
this will give added advantage of generating support files, unit test and e2e test files automaticall

following commands can be used to generate these project items

Component	ng g component my-new-component
Directive	ung g directive my-new-directive
Pipe	ng g pipe my-new-pipe
Service	ng g service my-new-service
Class	ng g class my-new-class
Interface	ng g interface my-new-interface
Enum	ng g enum my-new-enum
Module	ng g module my-module

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



