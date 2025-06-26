/*
  1.How do you create and use custom pipes?
  Angular provides several built-in pipes that help you format and transform data directly in your templates.
  Here's a list of the most commonly used built-in pipes:
 ✅ 1. Date Pipe:
 {{ today | date }}               <!-- Jun 26, 2025 -->
{{ today | date:'fullDate' }}    <!-- Thursday, June 26, 2025 -->
{{ today | date:'shortTime' }}   <!-- 5:30 PM -->
✅ 2. UpperCase / LowerCase Pipes:
{{ 'angular' | uppercase }}   <!-- ANGULAR -->
{{ 'ANGULAR' | lowercase }}   <!-- angular -->
✅ 3. Currency Pipe
{{ 1234.56 | currency }}                 <!-- $1,234.56 -->
{{ 1234.56 | currency:'EUR' }}          <!-- €1,234.56 -->
{{ 1234.56 | currency:'INR':'symbol' }} <!-- ₹1,234.56 -->
✅ 4. Percent Pipe
{{ 0.25 | percent }}       <!-- 25% -->
{{ 0.785 | percent:'1.0-2' }} <!-- 78.5% -->
✅ 5. Decimal Pipe:
{{ 3.14159 | number:'1.2-2' }} <!-- 3.14 -->
✅ 6. Slice Pipe
{{ [1,2,3,4,5] | slice:1:3 }}   <!-- [2,3] -->
{{ 'Angular' | slice:1:4 }}     <!-- ngu -->
✅ 7. Json Pipe
<pre>{{ user | json }}</pre>
✅ 8. Async Pipe:
<!-- Assume user$ is an Observable -->
<p>{{ user$ | async }}</p>
✅ 9. TitleCase Pipe:
{{ 'angular is awesome' | titlecase }} <!-- Angular Is Awesome -->
✅ Summary Table
| Pipe        | Purpose                       |
| ----------- | ----------------------------- |
| `date`      | Formats date/time             |
| `uppercase` | Converts text to UPPERCASE    |
| `lowercase` | Converts text to lowercase    |
| `currency`  | Formats currency              |
| `percent`   | Formats percentage            |
| `number`    | Formats number with decimals  |
| `slice`     | Extracts part of array/string |
| `json`      | Converts object to JSON       |
| `async`     | Handles Observables/Promises  |
| `titlecase` | Capitalizes each word         |


✅ 1. Creating a Custom Pipe:
To create a custom pipe, you use the @Pipe decorator along with a class that implements the PipeTransform interface.
ng generate pipe reverse

// reverse.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
This will generate something like:

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    return value.split('').reverse().join('');
  }
}

✅ 2. Registering the Pipe:
If you're using standalone components (Angular 17+), you must add the pipe to the imports of the component.

If using NgModules, declare the pipe in the module like this:
@NgModule({
  declarations: [
    ReversePipe,
    // other components/pipes
  ],
  exports: [
    ReversePipe // export if used outside this module
  ]
})
export class SharedModule {}

✅ 3. Using the Pipe in a Template:
<p>{{ 'angular' | reverse }}</p>
Output:
ralugna


✅ 4. Custom Pipe with Parameters
You can also pass arguments to your pipe:
@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {
  transform(value: number, factor: number): number {
    return value * factor;
  }
}

<p>{{ 5 | multiply:2 }}</p> <!-- Output: 10 -->

✅ Summary

| Step              | Description                                    |                  |
| ----------------- | ---------------------------------------------- | ---------------- |
| `@Pipe` Decorator | Marks the class as a pipe                      |                  |
| `PipeTransform`   | Interface with `transform()` method            |                  |
| Use in templates  | With the \`                                    | \` (pipe) symbol |
| Optional Params   | Passed like function arguments in the template |                  |
----------------------------------------------------------------------------------------------------------------------------------


✅ 2. What is Change Detection in Angular?
Change Detection in Angular is the mechanism that updates the view (DOM) whenever the application state (data) changes.
In simple terms:
It’s how Angular knows when to update the UI with new values from your component.
✅ How Does Change Detection Work?
Angular uses a Change Detection mechanism to check for changes in data and reflect those changes in the DOM.

Here’s how it works step-by-step:
🔄 Basic Flow of Change Detection:
Event triggers (e.g., user clicks a button, HTTP request completes, form input changes).
Angular runs change detection.
It checks all components from top to bottom in the component tree.
It compares the current value of a property with its previous value (in the template).
If a change is detected, Angular updates the DOM.

🔧 What Triggers Change Detection?
User input (e.g., click, keyup)
@Input() value change
HTTP responses (via Observables or Promises)
Timers (setTimeout, setInterval)
Manual triggers (using ChangeDetectorRef)

🧠 Under the Hood: Zone.js
Angular relies on a library called Zone.js that patches async operations and automatically triggers change detection when these operations complete.
setTimeout(() => {
  this.name = 'New Name'; // Angular will detect and update this
}, 1000);

🧭 Change Detection Strategies
Angular provides two strategies via ChangeDetectionStrategy:
1. Default (CheckAlways)
Every component in the tree is checked whenever change detection runs.

2. OnPush
Only re-check the component if:
An @Input() reference changes, OR
You manually trigger it (markForCheck(), detectChanges())

@Component({
  selector: 'my-comp',
  changeDetection: ChangeDetectionStrategy.OnPush
})


📌 Manual Control
You can manually trigger or control change detection using ChangeDetectorRef.
import { ChangeDetectorRef } from '@angular/core';

constructor(private cd: ChangeDetectorRef) {}

this.cd.detectChanges();     // Manually trigger detection
this.cd.markForCheck();      // Mark component to be checked in OnPush
this.cd.detach();            // Detach from change detection

✅ Summary
| Concept          | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| Change Detection | Angular’s way of updating the view when data changes                          |
| Triggered By     | Events, async operations, `@Input()` changes                                  |
| Library Used     | Zone.js to track async and schedule updates                                   |
| Strategies       | `Default` (always check), `OnPush` (check only on reference change or manual) |
| Manual Tools     | `ChangeDetectorRef` to fine-tune when change detection happens                |

--------------------------------------------------------------------------------------------------------------------------------------------

✅ 3.Short & Sweet Difference between @Input() and @Output() in Angular:

| Feature        | `@Input()`                           | `@Output()`                       |
| -------------- | ------------------------------------ | --------------------------------- |
| Direction      | **Parent ➡️ Child**                  | **Child ➡️ Parent**               |
| Purpose        | Pass data **into** a child component | Send events **out** to the parent |
| Used With      | Property binding `[inputProp]`       | Event binding `(outputEvent)`     |
| Decorator Type | Property                             | EventEmitter                      |

🔹 Example:
Parent → Child (using @Input):------------
// child.component.ts
@Input() title: string;

<!-- parent.component.html -->
<app-child [title]="'Hello Child'"></app-child>


Child → Parent (using @Output) :---------------
// child.component.ts
@Output() clicked = new EventEmitter<string>();
someMethod() {
  this.clicked.emit('Child clicked!');
}

<!-- parent.component.html -->
<app-child (clicked)="handleClick($event)"></app-child>

------------------------------------------------------------------------------------------------------------------------

✅ 4. What are Services and How Are They Injected in Angular?

🔹 What is a Service in Angular?
A service is a reusable class used to encapsulate business logic, data fetching, or shared functionality like:

HTTP calls
Authentication
Logging
Data sharing between components

 Why Use Services?
Separation of concerns (logic is separated from the component)
Reusability (can be shared across multiple components)
Easier testing

// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // auto-registers service in root injector
})
export class UserService {
  getUser() {
    return { name: 'Alice', role: 'Admin' };
  }
}

import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-profile',
  template: `<p>{{ user?.name }}</p>`
})
export class ProfileComponent {
  user: any;

  constructor(private userService: UserService) {
    this.user = this.userService.getUser();
  }
}


🔹 How Are Services Provided?
| Method                                        | Scope                                     |
| --------------------------------------------- | ----------------------------------------- |
| `@Injectable({ providedIn: 'root' })`         | Singleton service across the app          |
| `providers: [MyService]`  in component/module | New instance (scoped to component/module) |

✅ Summary
| Term            | Description                                                          |
| --------------- | -------------------------------------------------------------------- |
| **Service**     | Class for reusable logic/data access                                 |
| **Inject**      | Use constructor to access the service                                |
| **@Injectable** | Marks class as injectable                                            |
| **DI System**   | Angular uses **Dependency Injection** to manage and provide services |

------------------------------------------------------------------------------------------------------------------------


✅ 5. What is Lazy Loading in Angular? (Short & Sweet)
Lazy Loading is a technique where feature modules are loaded only when needed — not at app startup.
👉 It reduces initial load time and improves performance.

🔹 Why Use It?
Faster initial app load
Loads large features on  demand (e.g., /admin, /dashboard)

🔹 How to Implement Lazy Loading?
1. Create a Feature Module
app-routing.module.ts//
const routes: Routes = [
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

2. Add Component in Admin Module//
admin-routing.module.ts:
const routes: Routes = [
  { path: '', component: DashboardComponent }
];

✅ Now What Happens?
The AdminModule is not loaded initially.
When user navigates to /admin, Angular loads it dynamically.

✅ Summary Table
| Concept      | Description                            |
| ------------ | -------------------------------------- |
| Lazy Loading | Load modules **only when needed**      |
| Improves     | App startup time and performance       |
| How          | `loadChildren` with dynamic `import()` |
| Works With   | Feature modules (not root module)      |

-------------------------------------------------------------------------------------------------------------------------

✅ 6. What is the Role of ngOnInit() in an Angular Component?
🔹 What is ngOnInit()?
ngOnInit() is a lifecycle hook in Angular that runs after the component is initialized — right after the first @Input() values are set.

It’s part of the OnInit interface.

🔹 When is it Called?
Called once after the component’s constructor and after input bindings are set.

Ideal place for initialization logic, such as:
Fetching data
Setting defaults
Starting subscriptions

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<p>{{ name }}</p>`
})
export class ProfileComponent implements OnInit {
  name: string = '';

  ngOnInit() {
    // Initialization logic here
    this.name = 'Angular Developer';
  }
}
✅ Summary
| Hook         | Purpose                                    |
| ------------ | ------------------------------------------ |
| `ngOnInit()` | Run logic **after component init**         |
| Called When  | After constructor & input binding          |
| Common Use   | Fetch data, init variables, start services |
-----------------------------------------------------------------------------------------------------------------------

✅ 7. How to Handle Errors in HTTP Requests in Angular
In Angular, you handle HTTP request errors using RxJS catchError with the HttpClient service.
🔹 Basic Setup
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

constructor(private http: HttpClient) {}


🔹 Example: GET request with error handling
getUserData() {
  this.http.get('https://api.example.com/users')
    .pipe(
      catchError(error => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Something went wrong!'));
      })
    )
    .subscribe({
      next: data => console.log('User data:', data),
      error: err => console.log('Handled Error:', err.message)
    });
}

🔹 Optional: Centralized Error Handler (Reusable)
You can create a service to handle errors globally:
handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    console.error('Client-side or network error:', error.error);
  } else {
    console.error(`Server returned code ${error.status}, body:`, error.error);
  }
  return throwError(() => new Error('Something bad happened.'));
}

Use it in pipe(catchError(this.handleError)).

✅ Summary
| Step                    | Tool/Method                    |
| ----------------------- | ------------------------------ |
| Catch errors            | `catchError()` RxJS            |
| Throw back custom error | `throwError()` RxJS            |
| Central handling        | Error service or interceptor   |
| Logging/debugging       | `console.error()` or alert/log |
-------------------------------------------------------------------------------------------------------------------

✅ 8. What is the async Pipe in Angular?

🔹 What is it?
The async pipe automatically subscribes to an Observable or Promise and returns the latest value in the template.
It also unsubscribes automatically, preventing memory leaks.

🔹 When to Use It?
Displaying data from Observables or Promises in templates
Avoiding manual .subscribe() in the component

// component.ts
user$ = this.userService.getUser(); // returns Observable<User>

<!-- component.html -->
<p>{{ user$ | async }}</p>

✅ Summary
| Feature      | Description                             |
| ------------ | --------------------------------------- |
| `async` pipe | Auto-subscribes to Observables/Promises |
| Use case     | Data-binding in templates               |
| Benefit      | Simplifies code & avoids memory leaks   |
----------------------------------------------------------------------------------------------------------------------

✅ 9. What are Guards in Angular?
Guards in Angular are used to control navigation to and from routes.

They are interfaces that decide whether a route can be:
Entered (CanActivate)
Exited (CanDeactivate)
Loaded (CanLoad)
Activated for child routes (CanActivateChild)
Matched (CanMatch)

🔹 Common Types of Guards
| Guard              | Purpose                                         |
| ------------------ | ----------------------------------------------- |
| `CanActivate`      | Checks if **route can be accessed**             |
| `CanDeactivate`    | Checks if **user can leave** a component        |
| `CanLoad`          | Checks if a **module can be lazy-loaded**       |
| `CanActivateChild` | Checks if **child routes** can be activated     |
| `CanMatch`         | Used with **route matchers** for advanced logic |

🔹 Example: CanActivate Guard
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  canActivate(): boolean {
    return isLoggedIn(); // return true or false
  }
}
Apply to a route:
{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }

🔹 Example: CanDeactivate Guard
export interface CanExit {
  canExit: () => boolean;
}

@Injectable({ providedIn: 'root' })
export class ExitGuard implements CanDeactivate<CanExit> {
  canDeactivate(component: CanExit): boolean {
    return component.canExit();
  }
}
Use in route:
{ path: 'form', component: FormComponent, canDeactivate: [ExitGuard] }

✅ Summary
| Guard Type         | Use Case                                 |
| ------------------ | ---------------------------------------- |
| `CanActivate`      | Protect routes (e.g., auth)              |
| `CanDeactivate`    | Warn before leaving (e.g., unsaved form) |
| `CanLoad`          | Prevent lazy-loaded module access        |
| `CanActivateChild` | Secure nested child routes               |
| `CanMatch`         | Advanced route matching                  |
------------------------------------------------------------------------------------------------------------------------

10.What is the difference between Template-driven and Reactive forms?
| Feature                | 📝 **Template-Driven Forms**                  | ⚙️ **Reactive Forms**                                       |
| ---------------------- | --------------------------------------------- | ----------------------------------------------------------- |
| **Form Control Setup** | In the **HTML template** using `ngModel`      | In the **component class** using `FormControl`, `FormGroup` |
| **Code Location**      | More logic in **HTML**                        | More logic in **TypeScript**                                |
| **Form Creation**      | Automatically created by Angular              | Manually created and configured                             |
| **Validation**         | Defined in HTML using directives (`required`) | Defined in TS using `Validators`                            |
| **Scalability**        | Best for **simple forms**                     | Best for **complex and dynamic forms**                      |
| **Flexibility**        | Less flexible                                 | Highly flexible and testable                                |
| **Two-way Binding**    | Yes (`[(ngModel)]`)                           | No (unidirectional, explicit)                               |

✅ Summary

| Use Template-Driven When | Use Reactive When                      |
| ------------------------ | -------------------------------------- |
| Simple forms             | Complex, dynamic, or scalable forms    |
| Minimal logic needed     | Need full control and validation in TS |


| Template-Driven                | Reactive                                |
| ------------------------------ | --------------------------------------- |
| Simple, quick forms            | Complex forms, dynamic validation       |
| Less code in TS, more in HTML  | More control and validation logic in TS |
| Two-way binding with `ngModel` | Uses `FormGroup`, `FormControl`         |


📝 1. Template-Driven Form Example
✅ Use Case: Simple Contact Form
Location of logic: Mostly in the template (HTML).

🔧 app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  user = {
    name: '',
    email: ''
  };

  onSubmit(form: any) {
    console.log('Form submitted:', form.value);
  }
}

📄 app.component.html

<form #userForm="ngForm" (ngSubmit)="onSubmit(userForm)">
  <label>Name:</label>
  <input name="name" [(ngModel)]="user.name" required />
  <br />

  <label>Email:</label>
  <input name="email" [(ngModel)]="user.email" required email />
  <br />

  <button type="submit" [disabled]="!userForm.valid">Submit</button>
</form>

===================================================================

⚙️ 2. Reactive Form Example
✅ Use Case: Same Form with Programmatic Control
Location of logic: Mostly in the component class (TS).

🔧 app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  userForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    console.log('Form submitted:', this.userForm.value);
  }
}

📄 app.component.html

<form [formGroup]="userForm" (ngSubmit)="onSubmit()">
  <label>Name:</label>
  <input formControlName="name" />
  <div *ngIf="userForm.get('name')?.invalid && userForm.get('name')?.touched">
    Name is required.
  </div>
  <br />

  <label>Email:</label>
  <input formControlName="email" />
  <div *ngIf="userForm.get('email')?.invalid && userForm.get('email')?.touched">
    Valid email is required.
  </div>
  <br />

  <button type="submit" [disabled]="userForm.invalid">Submit</button>
</form>




 */
