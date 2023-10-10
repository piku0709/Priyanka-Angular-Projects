# What is Angular
Angular is a Javascript Framework which allows you to create reactive Single-PageA-applicatios (SPAs)
# Angular versioning
 - Angularjs (Angular 1)
 - complete re-write resulted in Angular 2 (2016)
 - Angular 2 is totally framewokr than Angularjs
 - Angular version 3 was skipped, then Angular 4, and now we have Angular 13, 14, 15 and so on..
 - Angular team releases a major version every 6 months
 - changes version to version are very minor and is backward compatible,not very much diff from Angular 2
 # Angualr project challenges
 - not authorized to run scripts in this system error: 
    - solved by command -> 'Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted'

 # Angular project steps
 - install nodejs from nodejs.org
 - install angualr 
    - npm install -g @angular/cli@latest
 - create a new angular project with name my-first-app
   - ng new my-first-app
 - use existing folder as your angular project folder
   - cd under existing folder
   - ng new angular-app --directory=./
- install bootstarp locally
   - npm install --save bootstrap@3
   - edit angula.json cofig file to let know that you are using bttostrap.min.css file under node_modules

# What is typescript
- Superset of javascript
- classes, interfaces, strongly typed, write robust code, gets checked while writing,   instead of while running
- needs to compile into javascript and then it can run in the browser
- angular is meant to be used with typescript

# Notes
- Angular projects are built from Components
- DataBinding is how we output data in the DOM(html), or how data reacts to user events
- ngModel is a directive to help with 2-way DataBinding
- using services and depedency injection we achieve different pieces/componenets in the    angular app communicate to each other, keeping code centralized and manage the state of the application
- routing helps us achieve manage different urls (from diff components), gives a feel of  switchng between pagaes, although technically we remain on a single page (index.html)
- angular gets started with main.ts, there we bootstrap an angular application (AppModule), by passing the module as an argument and in this module we bootstrap AppComponent, angular analyses appComponet and learns about <app-root> selector and its able to use this selector in index.html
- event binding 
   - <btn (click)="onClick()">
- property binding
 - <btn [disabled]="!allowResetuser">
- string interpolation
   - <p>{{ userName }}</p>
- 2-way data binding
 - <input type="text" [(ngModel)] = "userName">
- directives
 - instructions in the DOM
 - components are directives with a template
 - with components we instruct angular to add content of our component, and business logic of our component in our component's selector
 - ngIf, ngFor are built-in structural directive, have to be used with star(*)
 - ngClass, ngStyle are built-in directives, need to be used with square brackets([])
- observables , amgular uses this to handle asynchronous code
- 'forms' to handle user inputs 
- 'pipes' to transform the output to display on html
-  http, to reach out to web server, or save data into database
-  authentication in angular app
-  optimization
-  manage different modules

