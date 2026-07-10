// console.log("Start");

// console.log("Processing payment");

// console.log("End");


// function calculateRemainingAmount(total, paid) {
//   return total - paid;
// }

// console.log("Calculation started");

// const remainingAmount = calculateRemainingAmount(2000, 700);

// console.log(remainingAmount);

// console.log("Calculation completed");
// console.log("A");

// function processBooking() {
//   console.log("B");
//   console.log("C");
// }

// processBooking();

// console.log("D");



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

// After each macrotask, JavaScript clears the microtask queue before starting the next macrotask.




// Next topic — async and await
// console.log("Start");

// async function processPayment() {
//   console.log("Processing");

//   await Promise.resolve();

//   console.log("Completed");
// }

// processPayment();

// console.log("End");



console.log("Start");

setTimeout(() => {
  console.log("Timer 1");

  Promise.resolve().then(() => {
    console.log("Promise inside Timer");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1");

  setTimeout(() => {
    console.log("Timer 2");
  }, 0);
});

async function processBooking() {
  console.log("Booking started");

  await Promise.resolve();

  console.log("Booking completed");
}

processBooking();

console.log("End");



console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

async function loadData() {
  console.log("C");

  await Promise.resolve();

  console.log("D");

  setTimeout(() => {
    console.log("E");
  }, 0);
}

Promise.resolve().then(() => {
  console.log("F");
});

loadData();

console.log("G");

// Synchronous:
// Microtasks:
// Timers: