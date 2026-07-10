// // #Synchronous JavaScript
// console.log("Start");

// function processPayment() {
//   console.log("Processing");
// }

// processPayment();

// console.log("End");



// // #Call Stack
// function first() {
//   console.log("First");
//   second();
//   console.log("First End");
// }

// function second() {
//   console.log("Second");
// }

// first();

////#setTimeout()

// console.log("Start");

// setTimeout(() => {
//   console.log("Timer");
// }, 1000);

// console.log("End");

// Run the callback as soon as the current call stack and pending microtasks are complete.



// // #Event Loop

// The event loop coordinates:

// Call Stack
// Microtask Queue
// Macrotask Queue

// Basic execution order:

// 1. Run all synchronous code
// 2. Run all microtasks
// 3. Run one macrotask
// 4. Run any new microtasks
// 5. Run the next macrotask



// // #Macrotasks#
// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 0);

// console.log("C");



// // #Promise Execution Order
// console.log("A");

// Promise.resolve().then(() => {
//   console.log("B");
// });

// Promise.resolve().then(() => {
//   console.log("C");
// });

// console.log("D");



// // #Microtasks Inside a Timer
// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);

// setTimeout(() => {
//   console.log("D");
// }, 0);

// console.log("E");




// // #async Functions
// async function getPayment() {
//   return "Payment loaded";
// }

// console.log(getPayment());


// // #await
// console.log("Start");

// async function processPayment() {
//   console.log("Processing");

//   await Promise.resolve();

//   console.log("Completed");
// }

// processPayment();

// console.log("End");


// // #Promise and await Ordering
// console.log("A");

// async function first() {
//   console.log("B");

//   await Promise.resolve();

//   console.log("C");
// }

// Promise.resolve().then(() => {
//   console.log("D");
// });

// first();

// console.log("E");




// // #Complete Event Loop Example
// console.log("Start");

// setTimeout(() => {
//   console.log("Timer 1");

//   Promise.resolve().then(() => {
//     console.log("Promise inside Timer");
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log("Promise 1");

//   setTimeout(() => {
//     console.log("Timer 2");
//   }, 0);
// });

// async function processBooking() {
//   console.log("Booking started");

//   await Promise.resolve();

//   console.log("Booking completed");
// }

// processBooking();

// console.log("End");



// Quick Rules to Remember
// Synchronous code always runs first.

// Promise callbacks run before setTimeout callbacks.

// Code before await runs immediately.

// Code after await runs as a microtask.

// setTimeout(..., 0) still runs after synchronous code and microtasks.

// After every macrotask, all pending microtasks are completed.

// Microtasks run in the order they are added.



// JavaScript is single-threaded and executes synchronous code using the call stack. Asynchronous callbacks are handled through queues.
//  Promise callbacks and code after await are placed in the microtask queue, while timers such as setTimeout are placed in the macrotask queue. 
// After the call stack becomes empty, the event loop processes all microtasks before running the next macrotask.