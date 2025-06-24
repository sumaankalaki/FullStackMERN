/*
WHAT is RxJS?
RxJS (Reactive Extensions for JavaScript) is a library for reactive programming using Observables, to make it easier to work with asynchronous data like events, HTTP requests, WebSockets, etc.
It's mostly used in Angular, but can be used in any JavaScript/TypeScript project.
It helps manage data that changes over time (like a stream).
📌 Think of RxJS as a tool to handle async data like a stream (e.g., mouse clicks, form input, timers).

-----------------------------------------------------------------------------------------------------------------------------------

HOW do we use RxJS?
You use RxJS by creating and working with Observables.

1.Create an Observable – a data stream //

import { Observable } from 'rxjs';
const obs = new Observable(observer => {
  observer.next('Hello');
  observer.complete();
});


2.Subscribe to it – to start listening to data //

obs.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Done!')
});


3.Use Operators – to transform, filter, merge, delay, etc.

import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
  filter(x => x % 2 === 0),
  map(x => x * 10)
).subscribe(val => console.log(val)); // Output: 20, 40

-------------------------------------------------------------------------------------------------------------------------------------------

WHY do we need RxJS?
We use RxJS because it makes asynchronous, event-based programming much easier and cleaner.

✅ Reasons:
Handles async events in a clean and composable way.

Makes it easier to deal with:

1.User input events (clicks, typing)
2.Timers
3.HTTP requests
4.WebSocket messages

Helps you combine, transform, and cancel async operations easily.

📌 Especially useful in Angular, where many APIs return Observables (like HttpClient.get()).

----------------------------------------------------------------------------------------------------------------------------------------------------------


 RxJS TYPES – and Differences
Here are the most important types of Observables/Subjects:

| Type              | Description                               | Use Case                                 |
| ----------------- | ----------------------------------------- | ---------------------------------------- |
| `Observable`      | Base type. Emits data over time.          | Standard data streams (HTTP, events)     |
| `Subject`         | Like Observable + Observer. Multicast.    | Manually emit data; multiple subscribers |
| `BehaviorSubject` | Subject with initial value.               | Keep and share the latest value          |
| `ReplaySubject`   | Remembers previous values (replay).       | New subscribers get past values too      |
| `AsyncSubject`    | Emits **only the last value** on complete | Use when only final result matters       |

-----------------------------------------------------------------------------------------------------------------------------------------------------------

🔄 Quick Comparison:
Observable → Unicast (each subscriber gets their own stream)
Subject → Multicast (all subscribers share the same stream)
BehaviorSubject → Keeps latest value for new subscribers
ReplaySubject → Replays a specified number of past values
AsyncSubject → Waits for completion, then sends last value

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Summary
| Question  | Answer                                                                 |
| --------- | ---------------------------------------------------------------------- |
| **What**  | A library for handling async data streams using Observables            |
| **How**   | Create Observables, subscribe to them, and use operators               |
| **Why**   | Makes async code cleaner, supports real-time streams, flexible control |
| **Types** | Observable, Subject, BehaviorSubject, ReplaySubject, AsyncSubject      |

 */