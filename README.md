# What is Angular
Angular is a Javascript Framework which allows you to create reactive Single-PageA-applicatios (SPAs)
# Angular versioning
 - Angularjs (Angular 1)
 - complete re-write resulted in Angular 2 (2016)
 - Angular 2 is totally new framework than Angularjs
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
- install bootstrap locally
   - npm install --save bootstrap@3
   - edit angular.json config file to let angular know that you are using bttostrap.min.css file under node_modules
- relative and absolute path
   A relative path describes the location of a file relative to the current (working) directory*. An absolute path describes the location from the root directory. When learning to access data files through programming, we regularly use relative file paths
   - absolute path starts with a slash (/), which always gets apended to the root folder
   - relative path starts without a slash (/) or starts with a dot slash (./), which means add it to the currenlty loaded path or dot dot slash (../), which means go back one folder from the currently loaded path

# What is typescript
- Superset of javascript
- classes, interfaces, strongly typed, write robust code, gets checked while writing instead of while running
- needs to compile into javascript and then it can run in the browser
- angular is meant to be used with typescript

# Notes
- Angular projects are built from Components
- DataBinding is how we output data in the DOM(html), or how data reacts to user events
- ngModel is a directive to help with 2-way DataBinding
- using services and dependency injection we achieve different pieces/componenets in the angular app communicate to each other, keeping code centralized and manage the state of the application
- routing helps us achieve manage different urls (from diff components), gives a feel of switchng between pages, although technically we remain on a single page (index.html)
- angular gets started with main.ts, there we bootstrap an angular application (AppModule), by passing the module as an argument and in this module we bootstrap AppComponent, angular analyses appComponet and learns about <app-root> selector and its able to use this selector in index.html
- data flows from parent component to child component using @Input decorator and custom directives
- data flows to parent component from child component using @Output decorator by raising an event to notify. To raise an event, an @Output() must have a type of EventEmitter, which is a class in @angular/core that you use to emit events
- event binding 
   - <btn (click)="onClick()">
- property binding
   - <btn [disabled]="!allowResetuser">
- string interpolation
   - <p>{{ userName }}</p>
- 2-way data binding
   - <input type="text" [(ngModel)] = "userName">
- directives
   - 2 types: attribute directives and structural directives
   - attribute sirectives sit on elements just like attributes, only properties of element is changed, used with data binding and event binding
   - structural directives also sit like an attribute, with a leading star symbol(*) on an element but they also change the structure of the DOM around that element (add/remove elements from DOM)
   - structural directives are converted into <ng-template> internally, by angular (thats what the * denotes )
   - more than one structural directives cannot be used on a single element
   - directives are instructions in the DOM
   - components are directives with a template
   - with components we instruct angular to add content of our component, and business logic of our component in our component's selector
   - ngIf, ngFor are built-in structural directives, have to be used with star(*)
   - ngClass, ngStyle are built-in attribute directives, need to be used with square brackets []. square brackets mean that we are binding to some porperty on our directive
   - create your own atribute directive steps
      - ng generate directive ${directiveName} (ex with short form- ng g d better-highlight)
      - add the file under declarations in AppModule
   - HostListener and HostBinding decorators can be used inside a directive for working with any DOM element. With HostListener, we can bind to any property of an element inside of a driective
   - with custom directives we can also create custom properties and use Input decorator or bind them. These custom properties can be used on a DOM element using the custom directive
- Routing
   - Angular matches paths by prefix
   - add Routes and RouterModule from @angular/router package
   - add RouterModule into imports array of app.module.ts file
   - use your applications routes array (type Routes) with RouterModule.forRoot() method
   - angular has built-in directives routeLink to add your routes
   - built-in directive routerLinkActive can be used with link(li) html tag to add active style to active route
   - some of the router directives available are, routerLink, routerLinkActive,routerLinkActiveOptions, queryParams, fragment
   - routerink, queryParams and fragements can also be used with square brackets, ex -[routerLink], [queryParams], they can be used to bind dynamic route parameters or query params for a route, fragments can be used to pass value after hash (#) in the route
   - routerLink with square brackets accept an array value
   - queryParams with square brackets accept javascript object {allowEdit: '1'}
   - routerLinkActive directive with value 'active' (css class) can be used to show a currently selected link
   - pass queryParams value between several components using querParamsHandling value as 'preserve'
   - Guards are functionalities which execute before routes are loaded or before routes are left
- observables, angular uses this to handle asynchronous code
   - observable are stream various data sources, events (user input), Http requests, Triggered in code
   - observer is the code (which subscribes to the observables)
      - 3 types of data packages are received and with three hooks 
      - to handle data, handle error and handle completion
   -  npm install --save rxjs@6
   -  npm install --save rxjs-compat
   - we need to subscribe to observables when we want to use it
   - we also need to unsubscribe from observables when we do not need it.
   - angular features also have some built-in observables, ex - subscribing to params from angular route - we do not need to unsubscribe to angular observables, since angular does it for us
   - use this if the component needs to handle data changes without reloading 
   - use this when component needs to be ractive to any changes within the component
   - use this when template needs to refresh on its own
   - observable is from third party library 'rxjs' and not part of Angular
   - Even if the component is destroyed, observable used within component typescript file will not destroy
   - we need to explicitly destroy our own observables ( unsubscribe from observable) in ngOnDestry method  
   - if we use observable from Angular libraries, ex- Angular routes, Angular does the unsubscription for us, but its always good practice to unsubscrive from observables
   - every observable has a pipe method, which can be used to format data received from observables
   - pipe can take unlimited aount of arguments or operators
   - operators are useful to change the format of data from observables, for ex - by calling a map operator from 'rxjs/operators' inside 'pipe' method
   - Subject is also an object (special kind of observables) we can subscribe to, but its more active than observables, we can call next()
   - but when we create observables, we call next() from inside observables
   - Subjects from 'rxjs' are better altrnatives than EventEmitters from '@angular/core'
   - if you subscribe to EventEmitters, better use Subjects
   - can use operators with Subjects, 
   - should also unsubscribe to Subjects as well like observables
- 'forms' to handle user inputs from outside
   - template driven form , deined in HTML template only
   - reactive form, defined programatically in typescript code as well as in html template and then tied together to get better control for fine-tuning the form
   - we do not have form action/submit in the html template, instead angular should handle the form
   - 'ngModel' attribute can be used in 3 ways with angular form elements
      - can be used without any brackets around it i.e without any binding, where it is used to register the form-input to javascript representation of the form in typescript code. Sepciy the name of the input field using html attribute 'name'
      - can be used just with square brackets for one-way binding or property binding with form input elements to bind with a default value when needed
      - can be used with square brackets and parenthesis for one-way binding, ex- to get the value as well as to see the value instantly on the UI
   - ngModelgroup can be used to group form-controls, ex- grouping form-input fields in the javascript representaion of form field values, or to write a message on UI for the whole group if any data is not valid in the group
- 'pipes' to transform the output to display on html
   - pipes are feature built in Angular2 to transform some output in html template
   - we can also build our own pipes
   - they can be used both for synchronous or asynchronous data
   - pipes can be used with parameters by using colon (:), ex {{ server.started | date: 'fullDate'}}, date is a built-in angular pipe
   - multiple pipes can be applied together on data, but order is important, pipes are executed from left to right
   - 'async' is a built-in pipe with angular which helps us see the async data on html template after specified time in the promise returning that data
-  http, to reach out to web server, or save data into database
   - need to add this module in app.module.ts imports array - HttpClientModule from @angular/common/http
   - http requests are only sent to backened when we subscribe to the http methods we use
   - angular cannot connect to a databse directly, because its not safe, since its front end code and any body can look the code using developer tools
   - interceptors:
      - interceptors class/service neds to implement HttpInterceptor and implement intercept method
      - this method will be executed before each request is sent to backened
      - interceptors need to be declared in providers array usingg a json object in app.module.ts
      - commonly used when we need to run a common functionality/logic before sending ech request, ex- sending authentication for each request
      - we can also control the request execution in certain cases, ex- check request url and and add additional auth or headers 
      - HttpRequest object is immutable
      - we can also make some changes to the received response in the interceptor
      - every request's response is an observable and we can use pipe and map operators from 'rxjs' library to run a logic for each response 
-  authentication in angular app
   - we can use suth guards to guard any route and add the guard in the route in ruting module file
   - authenticatio token can be stored in localStorage and have it persistent until user is            authenticated 
- dynamic components
 - loaded programmitically, 
   - using *ngIf which controls whether component should be added to DOM
   - Dynamic Component Loader, component created and added via code, no need to touch template

-  optimization
-  manage different modules

