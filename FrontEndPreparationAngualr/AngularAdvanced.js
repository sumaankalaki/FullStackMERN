/*
✅ 1. What is the Concept of Zones in Angular (zone.js)?

🔹 What is a Zone?
A zone is an execution context that persists across asynchronous tasks (like setTimeout, Promises, or HTTP calls).
 It allows Angular to track and know when to update the UI automatically.
Angular uses zone.js to monkey-patch async APIs and detect when async tasks start/finish — so it knows when to trigger Change Detection.

🔹 Why Zones are Important in Angular
Without zones, Angular wouldn’t know when your app data changes due to:
API responses
Timers
User events
Promises, Observables

🔧 How It Works:
1.Zone wraps async operations (e.g. setTimeout, HTTP).
2.When async code completes, Zone triggers Angular's Change Detection.
3.UI is automatically updated.

🔹 Example Without Zone.js (manually detect changes):
constructor(private cdRef: ChangeDetectorRef) {}
setTimeout(() => {
  this.message = 'Updated!';
  this.cdRef.detectChanges(); // manual
}, 1000);
🔹 Example With Zone.js (automatic update):
setTimeout(() => {
  this.message = 'Updated!'; // Angular auto-updates UI
}, 1000);

✅ Summary Table

| Concept     | Explanation                              |
| ----------- | ---------------------------------------- |
| `zone.js`   | Tracks async operations in Angular       |
| Purpose     | Auto-trigger change detection            |
| Without it  | You’d need to manually detect UI changes |
| Included in | Angular by default (polyfills.ts)        |

-------------------------------------------------------------------------------------------------------------------

✅ 2. What is a Subject and BehaviorSubject in RxJS?
🔹 Subject
A multicast Observable — multiple subscribers can receive the same data.
Emits only after you subscribe.
No initial value.

const subject = new Subject<number>();
subject.subscribe(val => console.log('A:', val));
subject.next(1); // A: 1


🔹 BehaviorSubject
A Subject with an initial value.
Emits the current/latest value to new subscribers immediately.

const behavior = new BehaviorSubject<number>(0);
behavior.subscribe(val => console.log('A:', val)); // A: 0
behavior.next(5); // A: 5

✅ Key Differences:
| Feature             | `Subject`      | `BehaviorSubject`        |
| ------------------- | -------------- | ------------------------ |
| Initial Value       | ❌ No           | ✅ Yes                    |
| Latest Value Replay | ❌ No           | ✅ Yes (on new subscribe) |
| Use Case            | Events/streams | State, form, shared data |

-----------------------------------------------------------------------------------------------------------------------------------

✅ 3. What is NgRx? (Short Answer)
NgRx is a state management library for Angular based on Redux (a reactive pattern using Actions, Reducers, Store, and Effects).

It uses RxJS under the hood.

🔹 Why Use NgRx?
Manage global state in large, complex apps
Keep app state predictable and centralized
Make state changes traceable and testable
Handle side effects (like HTTP calls) using Effects

🔹 When to Use It?
✅ Ideal for:

Large-scale apps with complex shared state
Apps with deep component trees
When you need undo/redo, time travel debugging, or strict immutability
❌ Not needed for:
Small apps or simple component communication

✅ Summary
| Feature      | Description                           |
| ------------ | ------------------------------------- |
| **NgRx**     | Reactive state management for Angular |
| **Based on** | Redux + RxJS                          |
| **Best for** | Large, complex, data-driven apps      |
------------------------------------------------------------------------------------------------------------------

✅ 4. How Does Angular Handle Memory Leaks? How Can You Prevent Them?
🔹 How Angular Helps Prevent Memory Leaks
Angular’s component lifecycle (like ngOnDestroy()) helps manage resource cleanup.
Angular unsubscribes automatically from certain bindings (like AsyncPipe).
Angular destroys child components automatically when parent is removed.

🔹 How Memory Leaks Happen in Angular
Unsubscribed Observables (e.g., interval(), HTTP, WebSocket).
DOM event listeners not removed.
Global variables or services holding references.
Detached views/components that are not cleaned up properly.

 How to Prevent Memory Leaks:
 | Technique                                | Example / Tip                                 |
| ---------------------------------------- | --------------------------------------------- |
| ✅ **Unsubscribe manually**               | Use `ngOnDestroy()` or `takeUntil()`          |
| ✅ **Use `AsyncPipe`**                    | Auto-unsubscribes when component is destroyed |
| ✅ **Use `take(1)` for one-time streams** | Good for HTTP or single-use Observables       |
| ✅ **Detach unused event listeners**      | `element.removeEventListener()`               |
| ✅ **Avoid global state misuse**          | Clear services or localStorage if needed      |

🔧 Example with takeUntil()
private destroy$ = new Subject<void>();

ngOnInit() {
  this.dataService.getData()
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => this.data = data);
}

ngOnDestroy() {
  this.destroy$.next();
  this.destroy$.complete();
}

✅ Summary
| Angular Helps With       | You Must Handle                          |
| ------------------------ | ---------------------------------------- |
| Auto component cleanup   | Manual unsubscription of Observables     |
| `AsyncPipe` auto cleanup | DOM events, services, or long-lived refs |
----------------------------------------------------------------------------------------------------------------------

✅ 5. How to Optimize an Angular Application for Performance
Here’s a quick and effective checklist to boost Angular app performance:
🔹 1. Use Lazy Loading
Load feature modules only when needed (on route navigation).
{ path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }

🔹 2. OnPush Change Detection
Use ChangeDetectionStrategy.OnPush to avoid unnecessary checks.
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})

🔹 3. Use TrackBy in ngFor
Prevent full DOM re-renders in *ngFor loops.
<li *ngFor="let item of items; trackBy: trackByFn">...</li>

4. Optimize Assets
Minify images, use WebP format.
Use SVGs for icons.
Lazy load heavy assets/videos.

5. Avoid Memory Leaks
Unsubscribe from Observables.
Use AsyncPipe and takeUntil().

🔹 6. Enable Production Build
Use ng build --prod to enable Ahead-of-Time (AOT), minification, and tree-shaking.

7. Use Preloading Strategically
RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })

🔹 8. Bundle Optimizations
Remove unused code (tree shaking).
Use lazy-loaded components for modals/dialogs.

✅ Bonus: Tools to Measure Performance
Chrome DevTools (Lighthouse, Performance tab)
Angular DevTools
Webpack Bundle Analyzer

🧠 Summary Table
| Tip                     | Purpose                 |
| ----------------------- | ----------------------- |
| Lazy loading            | Load only when needed   |
| OnPush change detection | Reduce CD cycles        |
| TrackBy in ngFor        | Avoid full DOM redraw   |
| Unsubscribe observables | Prevent memory leaks    |
| Optimize assets         | Reduce load time        |
| Production build        | Smaller, faster bundles |
------------------------------------------------------------------------------------------------------------------

✅ 6. AOT vs. JIT Compilation in Angular

| Feature             | **AOT (Ahead-of-Time)**            | **JIT (Just-in-Time)**        |
| ------------------- | ---------------------------------- | ----------------------------- |
| **When Compiled**   | At **build time** (before browser) | In the **browser at runtime** |
| **Speed**           | Faster app launch                  | Slower initial load           |
| **File Size**       | Smaller, optimized code            | Larger, includes compiler     |
| **Use In**          | Production builds                  | Development builds            |
| **Error Detection** | Compile-time (early)               | Runtime (later)               |


🔹 Summary:
AOT = Pre-compiled → faster, safer for production
JIT = Compiled in browser → flexible, better for dev/debug

Use:
ng build --prod → AOT
ng serve → JIT (by default)


------------------------------------------------------------------------------------------------------------------

 7.How does Angular Universal help with SEO?
 🔹 What is Angular Universal?
Angular Universal is server-side rendering (SSR) for Angular apps — it renders pages on the server before sending them to the browser.
🔹 How It Helps with SEO
| Problem (SPA)                       | Solution with Angular Universal         |
| ----------------------------------- | --------------------------------------- |
| Content is loaded via JavaScript    | HTML is **pre-rendered** on the server  |
| Search engines can’t see JS content | Crawlers get fully-rendered HTML        |
| Slow first load (blank screen)      | Faster **First Contentful Paint (FCP)** |

🔹 Example Benefits:
Improved Google indexing
Better social media previews (meta tags)
Enhanced performance and accessibility

✅ Summary:
| Feature     | Angular Universal Benefit            |
| ----------- | ------------------------------------ |
| SEO         | Search engines can read real content |
| Performance | Faster initial load                  |
| UX          | Shows content before JS finishes     |
-----------------------------------------------------------------------------------------------------------------


✅ 8. What Are Feature Modules & How Do They Help?
🔹 What is a Feature Module?
A Feature Module in Angular is a separate, self-contained module that encapsulates a specific area of functionality in your app.

Example:
UserModule, AdminModule, DashboardModule

🔹 Why Use Feature Modules?
| Benefit                 | Description                                         |
| ----------------------- | --------------------------------------------------- |
| ✅ **Code organization** | Keeps features modular and maintainable             |
| ✅ **Reusability**       | Easy to reuse and share modules                     |
| ✅ **Lazy loading**      | Load features only when needed (optimize load time) |
| ✅ **Team scaling**      | Teams can work on separate modules easily           |

🔧 Example
@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}

Then import in AppModule or use lazy loading:
{ path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }

✅ Summary

| Feature Module Role   | Benefit                               |
| --------------------- | ------------------------------------- |
| Encapsulates features | Clean, modular codebase               |
| Supports lazy loading | Better performance                    |
| Promotes separation   | Easier testing and team collaboration |

-----------------------------------------------------------------------------------------------------------------------


✅ 9. How Do You Write Unit Tests for Angular Components and Services?
Unit testing in Angular is done using Jasmine (test framework) and Karma (test runner). Angular CLI sets this up by default.
🧪 Example: greeting.component.ts
@Component({
  selector: 'app-greeting',
  template: `<h1>Hello {{ name }}</h1>`
})
export class GreetingComponent {
  name = 'Angular';
}
🧪 Test: greeting.component.spec.ts
describe('GreetingComponent', () => {
  let component: GreetingComponent;
  let fixture: ComponentFixture<GreetingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingComponent]
    });

    fixture = TestBed.createComponent(GreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display greeting message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello Angular');
  });
});

🔹 2. ✅ Unit Test for a Service
🧪 Example: math.service.ts
@Injectable({ providedIn: 'root' })
export class MathService {
  add(a: number, b: number): number {
    return a + b;
  }
}

🧪 Test: math.service.spec.ts
describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should add two numbers correctly', () => {
    expect(service.add(2, 3)).toBe(5);
  });
});

✅ Summary
| Item               | Testing Tool        | Purpose                 |
| ------------------ | ------------------- | ----------------------- |
| `TestBed`          | Angular testing env | Set up test modules     |
| `ComponentFixture` | Component wrapper   | Access DOM and instance |
| `expect()`         | Jasmine             | Assertion library       |
----------------------------------------------------------------------------------------------------






















 */