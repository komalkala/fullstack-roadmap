// //var
// console.log(paymentStatus);

// var paymentStatus = "PAID";

// console.log(paymentStatus);


// //let
// var paymentStatus;

// console.log(paymentStatus);

// paymentStatus = "PAID";

// console.log(paymentStatus);


// //const

// const payment = {
//   status: "PENDING",
//   amount: 1000,
// };

// payment.status = "PAID";

// console.log(payment);

// function processBooking() {


//     if (!bookingId) {
//     console.log("Booking ID is missing");
//   }
//   var bookingId = "BK-1001";
// }

// processBooking();

// function createPaymentProcessor(paymentAmount) {
//   let allocatedAmount = 0;

//   function getSummary() {
//     return {
//       paymentAmount,
//       allocatedAmount,
//       remainingAmount: paymentAmount - allocatedAmount,
//     };
//   }

//   return {
//     getSummary,
//   };
// }

// const processor = createPaymentProcessor(1000);

// console.log(processor.getSummary());

function allocate(amount) {
  const remainingAmount = paymentAmount - allocatedAmount;

  if (amount <= 0) {
    return "INVALID_ALLOCATION_AMOUNT";
  }

  if (amount > remainingAmount) {
    return "ALLOCATION_EXCEEDS_REMAINING_AMOUNT";
  }

  allocatedAmount += amount;

  return getSummary();
}
const processor = createPaymentProcessor(1000);

console.log(processor.allocate(400));
console.log(processor.allocate(700));