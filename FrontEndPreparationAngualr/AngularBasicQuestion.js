/*

[1] What is Angular?
Angular is a TypeScript-based open-source web application framework developed and maintained by Google.
 It is used to build single-page applications (SPAs)—dynamic and
 responsive web apps that load a single HTML page and dynamically update content as the user interacts with the app.

Key features of Angular:
Component-based architecture for re-usability and maintainability
Two-way data binding to sync UI and application logic
Dependency Injection (DI) to enhance modularity and testability
Routing to manage navigation
RxJS and Observables for reactive programming
Built-in form handling, HTTP client, and unit testing tools

 Difference between Angular and AngularJS
| Feature                  | AngularJS (1.x)                           | Angular (2+)                                    |
| ------------------------ | ----------------------------------------- | ----------------------------------------------- |
| **Language**             | JavaScript                                | TypeScript (superset of JavaScript)             |
| **Architecture**         | MVC (Model-View-Controller)               | Component-based                                 |
| **Mobile Support**       | Limited                                   | Built with mobile support in mind               |
| **Performance**          | Slower (due to dirty checking)            | Faster (uses a more efficient change detection) |
| **Dependency Injection** | Custom implementation                     | Hierarchical and more powerful                  |
| **Tooling**              | Basic (manual setup)                      | Modern CLI, AOT compiler, tree-shaking, etc.    |
| **Learning Curve**       | Easier for small projects                 | Steeper but more robust                         |
| **DOM Manipulation**     | Direct DOM manipulation                   | Uses a virtual DOM abstraction                  |
| **Support & Updates**    | No longer actively developed (deprecated) | Actively maintained and updated                 |

------------------------------------------------------------------------------------------------------------------------------------------

[2] What are Components in Angular?
In Angular, a component is the fundamental building block of the user interface.
Each component controls a portion of the screen (called a "view") and consists of three main parts:

A component includes:
1.Template:
Defines the HTML view shown to the user.
Can contain Angular syntax like *ngIf, *ngFor, {{}} for data binding.

2.Class (TypeScript):
Contains the business logic and data.
Includes properties and methods used in the template.
Decorated with @Component.

3.Metadata:
Provided via the @Component decorator.
Includes info like selector (HTML tag), template URL, and style files.
------------------------------------------------------------------------------
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',           // custom HTML tag to use this component
  templateUrl: './app.component.html',  // template file
  styleUrls: ['./app.component.css']    // CSS file
})
export class AppComponent {
  title = 'My Angular App';
}
---------------------------------------------------------------------------------------------------------------------------------------
   [3] What is a module in Angular and why is it needed?

   A module in Angular is a container for a group of related components, directives, pipes, and services.
   It also imports other modules and provides services that can be injected across the application.

   import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],  // components, directives, and pipes
  imports: [BrowserModule],      // other Angular modules
  providers: [],                 // services
  bootstrap: [AppComponent]      // root component to bootstrap
})
export class AppModule {}


🔹 Why Are Modules Needed?
1.Organization & Separation of Concerns:
Modules help divide the application into logical pieces, such as UserModule, AdminModule, or SharedModule, making the codebase more maintainable.
2.Reusability:
Modules can encapsulate functionality and be reused across different parts of the app or in different projects (e.g., SharedModule for shared components).
3.Lazy Loading:
Angular supports lazy loading at the module level, meaning certain modules are loaded only when needed — improving performance and reducing initial load time.
4.Dependency Management:
Modules declare their own dependencies (imports and providers), keeping them self-contained and easier to test.
5.Bootstrapping:
Angular applications must have at least one module, the root module (typically AppModule), which bootstraps the application.


 🧩Types of Modules
1.Root Module: The entry point of the application.
2.Feature Module: Organizes related functionality (e.g., UserModule, ProductModule).
3.Shared Module: Contains common components, pipes, and directives used across the app.
4.Core Module: Contains singleton services (like auth or config services) used across the app.

Summary
An Angular module is a class marked with @NgModule, used to group related components and services.
It enhances modularity, promotes re-usability, enables lazy loading, and improves app structure.

---------------------------------------------------------------------------------------------------------------------------------------
✅ 4. What is Two-Way Data Binding in Angular?


Two-way data binding is a technique in Angular that allows synchronization of data between the component class and the template (view) in both directions:
1.If the component's property changes, the view automatically updates.
2.If the user changes the value in the view (e.g., input field), the component's property also updates.
🔁 How Does It Work?
[] → Property binding (component → view)

() → Event binding (view → component)

So, [(ngModel)] is syntactic sugar for:
<input [value]="name" (input)="name = $event.target.value">
With two-way binding, it becomes:
<input [(ngModel)]="name">

🔐 Key Points
Requires importing FormsModule for ngModel.
Enables real-time sync between the component and the view.
Often used in forms and user input handling.

---------------------------------------------------------------------------------------------------------------------------------------

✅ 5. What is a Directive in Angular?
In Angular, a directive is a class with metadata that allows you to attach behavior to elements in the DOM.
Directives let you manipulate the structure or appearance of the DOM in powerful ways.

A directive in Angular is a class that lets you add custom behavior to DOM elements.
There are 3 types:
Component Directives (with templates),
Structural Directives (modify DOM structure),
Attribute Directives (modify appearance/behavior).



1.Component Directives (with templates),
Technically a directive with a template.
Defined with @Component (a subclass of @Directive).
Used to create reusable UI blocks.
@Component({
  selector: 'app-hello',
  template: `<p>Hello World</p>`
})
export class HelloComponent {}


2.Structural Directives (modify DOM structure),
Change the structure of the DOM by adding/removing elements.
Use the * prefix in templates.
Common Structural Directives:
*ngIf – Adds/removes elements based on a condition.
*ngFor – Repeats a block of HTML for each item in a list.
*ngSwitch – Switches views based on a condition.

<div *ngIf="isLoggedIn">Welcome back!</div>

3.Attribute Directives (modify appearance/behavior).
Change the appearance or behavior of an element, component, or another directive.
They don’t change the structure (no * prefix).
Common Attribute Directives:
ngClass – Adds/removes CSS classes.
ngStyle – Applies inline styles.
Custom attribute directives – You can create your own.

<p [ngStyle]="{'color': 'blue'}">Styled text</p>

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
  }
}


---------------------------------------------------------------------------------------------------------------------------------------
✅ 6. What is Dependency Injection in Angular?

Dependency Injection (DI) in Angular is a design pattern used to supply a class with the dependencies it needs,
rather than creating them inside the class itself.
Angular's DI system makes components, services, and other classes more modular, reusable, and testable.

🔍 Why is Dependency Injection Needed?

Instead of hard-coding dependencies (e.g., services or APIs), Angular injects them automatically, which:
Promotes loose coupling
Improves testability
Encourages reusability
Follows Inversion of Control (IoC) principles

🧩 How It Works
Angular uses a dependency injection container to manage and inject services into classes like components or other services.
1.Service class (LoggerService):
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  log(message: string) {
    console.log('Log:', message);
  }
}

2.Component using the service:
@Component({...})
export class AppComponent {
  constructor(private logger: LoggerService) {}

  ngOnInit() {
    this.logger.log('App initialized');
  }
}
Angular sees the LoggerService in the constructor and injects it automatically.

 🔐 @Injectable() Decorator
Marks a class as available for injection.
When used with providedIn: 'root', Angular provides the service as a singleton across the app.

🗃️ Providers in Angular
Dependencies are configured through providers, which define how to create or deliver a service.
You can specify providers in:
@Injectable({ providedIn: 'root' }) – global scope
@NgModule.providers – module scope
@Component.providers – component scope

📦 DI Scope and Hierarchy
Singleton (root): Same instance everywhere (default).
Scoped: New instance in specific components or modules.

📝 Summary
Dependency Injection in Angular is a built-in mechanism for managing how objects get their dependencies.
It promotes cleaner, more testable, and more maintainable code by allowing Angular to inject services into components automatically.

---------------------------------------------------------------------------------------------------------------------------------------

7✅ Angular CLI (Command Line Interface)
Angular CLI is a command-line tool that helps you create, build, test, and manage Angular applications efficiently.

🚀 Why It's Useful:
Quickly sets up new projects (ng new)
Generates components, services, etc. (ng generate)
Runs and builds apps easily (ng serve, ng build)
Enforces best practices and structure
Boosts developer productivity
In short: Angular CLI automates common tasks and makes Angular development faster, easier, and more consistent.

---------------------------------------------------------------------------------------------------------------------------------------
8✅ Difference Between *ngIf and *ngFor
| Directive | Purpose                                                   | Example                                          |
| --------- | --------------------------------------------------------- | ------------------------------------------------ |
| `*ngIf`   | Conditionally **displays** an element based on a boolean  | `<div *ngIf="isLoggedIn">Welcome</div>`          |
| `*ngFor`  | **Loops** through a list and creates one element per item | `<li *ngFor="let item of items">{{ item }}</li>` |

In short:
*ngIf = show/hide based on a condition.
*ngFor = repeat an element for each item in a list.

---------------------------------------------------------------------------------------------------------------------------------------

✅ 9. How Does Routing Work in Angular?

Routing in Angular allows you to navigate between different views or components in a single-page application (SPA) without reloading the page.
🔁 How It Works:
1.Define Routes
In the app-routing.module.ts, you configure routes:
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent } // wildcard for 404
];

2.Import RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

3.Use <router-outlet> in Template
Acts as a placeholder where the routed component is displayed.
<router-outlet></router-outlet>

4.Navigate Between Routes
Using a link:
<a routerLink="/about">About</a>

Programmatically:
this.router.navigate(['/about']);

📦 Key Features
Path matching
Route parameters (/user/:id)
Lazy loading
Route guards (auth protection)
Nested routes

📝 Summary
Routing in Angular enables navigation between components using URLs, managed through RouterModule.
 It uses <router-outlet> to load views dynamically without reloading the page.


---------------------------------------------------------------------------------------------------------------------------------------

✅ 10. What Are Lifecycle Hooks in Angular?

Lifecycle hooks in Angular are special methods that get called at specific stages of a component or directive’s life — from creation to destruction.
They let you run custom code during key moments like initialization, changes, or cleanup.

🔄 Common Lifecycle Hooks
| Hook                   | Purpose                                                                          |
| ---------------------- | -------------------------------------------------------------------------------- |
| `ngOnInit()`           | Runs after the component is initialized (good for data fetching)                 |
| `ngOnChanges()`        | Called when input property values change                                         |
| `ngDoCheck()`          | Custom change detection                                                          |
| `ngAfterViewInit()`    | Called after component's view (and child views) is initialized                   |
| `ngAfterContentInit()` | Called after projected content (e.g., `<ng-content>`) is initialized             |
| `ngOnDestroy()`        | Cleanup just before the component is destroyed (e.g., unsubscribe, clear timers) |

| **Hook**                      | **When It's Called**                                                                 |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| **1. `ngOnChanges()`**        | Called **first**, when any `@Input()` properties change (including on first render). |
| **2. `ngOnInit()`**           | Called **once after the first `ngOnChanges()`**, used for initialization logic.      |
| **3. `ngDoCheck()`**          | Called **on every change detection cycle**, for custom change detection.             |
| **4. `ngAfterContentInit()`** | Called after Angular projects external content (`<ng-content>`) into the component.  |
| **5. `ngAfterViewInit()`**    | Called after the component’s view (and its child views) is initialized.              |
| **6. `ngOnDestroy()`**        | Called right before Angular destroys the component (for cleanup).                    |


📝 Summary
Lifecycle hooks are methods Angular calls at key points in a component’s life,
 allowing you to hook into and manage its behavior during creation, updates, and destruction.
 */
