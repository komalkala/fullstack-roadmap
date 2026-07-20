// // #Creating a Promise

// const paymentPromise = new Promise((resolve, reject) => {
//   const paymentSuccessful = true;

//   if (paymentSuccessful) {
//     resolve("Payment completed successfully");
//   } else {
//     reject(new Error("Payment failed"));
//   }
// });

// paymentPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });




//   // #finally()
//   const paymentPromise = new Promise((resolve, reject) => {
//   const paymentSuccessful = true;

//   if (paymentSuccessful) {
//     resolve("Payment successful");
//   } else {
//     reject(new Error("Payment failed"));
//   }
// });

// paymentPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log("Payment request completed");
//   });

//   // # Promise chaining
//   Promise.resolve(100)
//   .then((amount) => {
//     console.log(amount);

//     return amount + 50;
//   })
//   .then((updatedAmount) => {
//     console.log(updatedAmount);
//   });


//   // #Error in a Promise chain
//   Promise.resolve(1000)
//   .then((amount) => {
//     console.log(amount);

//     throw new Error("Payment processing failed");
//   })
//   .then((updatedAmount) => {
//     console.log(updatedAmount);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });


//   // #async/await with try...catch
// // # Successful example
//   function getBooking() {
//   return Promise.resolve("Booking loaded");
// }

// async function loadBooking() {
//   try {
//     const result = await getBooking();

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// loadBooking();

// // # Failed example

// function getBooking() {
//   return Promise.reject(new Error("Booking not found"));
// }

// async function loadBooking() {
//   try {
//     const result = await getBooking();

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// loadBooking();


// // # finally with async/await
// function savePayment() {
//   return Promise.resolve("Payment saved");
// }

// async function submitPayment() {
//   try {
//     const result = await savePayment();

//     console.log(result);
//   } catch (error) {
//     console.log(error.message);
//   } finally {
//     console.log("Request completed");
//   }
// }

// submitPayment();

// // #Sequential vs parallel execution
// function wait(ms, value) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(value), ms);
//   });
// }

// async function runSequentially() {
//   const first = await wait(1000, "First completed");
//   console.log(first);

//   const second = await wait(1000, "Second completed");
//   console.log(second);
// }

// runSequentially();



// #Parallel execution with Promise.all()
function wait(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

async function runInParallel() {
  const results = await Promise.all([
    wait(1000, "First completed"),
    wait(1000, "Second completed"),
  ]);

  console.log(results);
}

runInParallel();


// #Promise.allSettled() waits for all Promises to finish, even when some succeed and some fail.
async function loadDashboard() {
  const results = await Promise.allSettled([
    Promise.resolve("Payments loaded"),
    Promise.reject(new Error("Bookings unavailable")),
    Promise.resolve("Customers loaded"),
  ]);

  results.forEach((result) => {
    if (result.status === "fulfilled") {
      console.log(result.value);
    } else {
      console.log(result.reason.message);
    }
  });
}

loadDashboard();



//Promise.race() returns the first settled Promise, whether it is fulfilled or rejected.
function wait(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

async function runRace() {
  const result = await Promise.race([
    wait(2000, "First completed"),
    wait(1000, "Second completed"),
  ]);

  console.log(result);
}

runRace();


// #Promise.any()returns the first successfully fulfilled Promise. It ignores rejected Promises unless every 
// # Promise.any() throws one combined error called AggregateError


const result = await Promise.any([
  Promise.reject(new Error("Payment failed")),
  Promise.resolve("Booking loaded"),
  Promise.resolve("Customer loaded"),
]);

console.log(result);



