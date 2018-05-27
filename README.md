# OnlineLibraray

## GitCommands

Installing GitCommands

Install github for windows.

----------------------------------------------------------------------------------

Generating SSH Key

C:\Program Files\Git\git-bash.exe

ssh-keygen

----------------------------------------------------------------------------------

Settings for GIT

git config --global user.email "you@example.com"

git config --global user.name "Your Name"

----------------------------------------------------------------------------------

Setting the origin for GIT

git remote add origin https://github.com/suganthy/online-library

----------------------------------------------------------------------------------

Storing the credentials

git config credential.helper store

git push https://github.com/suganthy/online-library

----------------------------------------------------------------------------------

Providing support for Sass

ng set defaults.styleExt scss

change all .css files to .scss

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./yourfilesass.scss'  ]
})

----------------------------------------------------------------------------------
Setting up Bootstrap 

Change the package.json dependency to support bootstrap version 
"bootstrap" : "^3.3.7"     

Run command
npm install

----------------------------------------------------------------------------------

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).