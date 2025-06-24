/*
Thought for a second

Let’s break down Angular using the What - How - Why framework:

🔹 WHAT is Angular?
Angular is a front‑end web application framework maintained by Google. It lets you build single‑page applications (SPAs) with:
TypeScript at its core
A component‑based architecture
Built‑in features for routing, forms, HTTP, dependency injection, and tooling

🔹 HOW do we use Angular?
You typically work with Angular via the Angular CLI and its core building blocks.


1.Install & scaffold

npm install -g @angular/cli
ng new my-app
cd my-app
ng serve


2.Components
#Define with @Component({ selector, template, styles })
#Encapsulate template (HTML), logic (TS), and styles (CSS)

// src/app/hello.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `<h1>Hello, {{ name }}!</h1>`
})
export class HelloComponent {
  name = 'Angular';
}


3.Modules & Routing

#NgModule groups components, services, etc.
#RouterModule defines navigation

// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

4.Services & DI

Create injectable services for data or logic
Inject them into components via the constructor


// src/app/data.service.ts

import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class DataService {
  getData() { return ['A', 'B', 'C']; }
}
// Usage in a component:
constructor(private dataSvc: DataService) { }

5.Build & Deploy

ng build --prod
# Deploy the contents of dist/ to your web server


🔹 WHY use Angular?

1.Structured architecture
Clear separation of concerns (components, services, modules)

2.Type safety & tooling
Built on TypeScript: autocompletion, refactoring, early error detection
Powerful CLI for scaffolding, testing, and building

3.Rich ecosystem
Official libraries for forms, routing, HTTP, internationalization, PWA support

4.Performance & scalability
Ahead‑of‑Time (AOT) compilation, tree‑shaking, lazy‑loading
Well‑suited for large enterprise apps

5.Community & support
Backed by Google, with a large community, lots of tutorials, and third‑party libraries

🔄 Quick Recap


| Question | Answer                                                                                 |
| -------- | -------------------------------------------------------------------------------------- |
| **What** | A TypeScript‑based framework for building SPAs                                         |
| **How**  | Use the Angular CLI, create components/services/modules, wire up routing, build/deploy |
| **Why**  | Provides a structured, performant, and scalable way to build complex web apps          |




✅ Basic Angular Interview Questions

    1.What is Angular? How is it different from AngularJS?
    2.What are components in Angular?
    3.What is a module in Angular and why is it needed?
    4.What is two-way data binding? How does it work in Angular?
    5.What is a directive? Name different types of directives.
    6.What is dependency injection in Angular?
    7.What is Angular CLI and how is it useful?
    8.Explain the difference between ngIf and ngFor.
    9.How does routing work in Angular?
    10.What are lifecycle hooks in Angular? Can you name a few?

⚙️ Intermediate Angular Interview Questions

    1.How do you create and use custom pipes?
    2.What is Change Detection in Angular? How does it work?
    3.What is the difference between @Input() and @Output()?
    4.What are services and how are they injected?
    5.What is lazy loading and how is it implemented in Angular?
    6.What is the role of ngOnInit() in a component?
    7.How do you handle errors in HTTP requests using Angular?
    8.What is the async pipe and when would you use it?
    9.What are guards in Angular? (CanActivate, CanDeactivate, etc.)
    10.What is the difference between Template-driven and Reactive forms?

🚀 Advanced Angular Interview Questions
How does Angular’s Change Detection strategy work (Default vs. OnPush)?

    1.Explain the concept of zones in Angular (zone.js).
    2.What is a Subject and BehaviorSubject in RxJS? How do they differ?
    3.What is NgRx? Why and when would you use it?
    4.How does Angular handle memory leaks? How can you prevent them?
    5.How would you optimize an Angular application for performance?
    6.What is Ahead-of-Time (AOT) compilation vs. Just-in-Time (JIT)?
    7.How does Angular Universal help with SEO?
    8.What are feature modules and how do they help with code organization?
    9.How do you write unit tests for Angular components and services?

  */