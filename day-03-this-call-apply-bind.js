// const payment = {
//   paymentNumber: "PAY-1001",
//   amount: 1500,

//   showPaymentDetails() {
//     console.log(this.paymentNumber);
//     console.log(this.amount);
//   },
// };

// payment.showPaymentDetails();

const payment = {
  amount: 1000,

  regularMethod() {
    console.log(this.amount);
  },

  arrowMethod: () => {
    console.log(this.amount);
  },
};

payment.regularMethod();
payment.arrowMethod();


//The arrow function does not create its own this. It takes this from the outer scope, not from the payment object, so this.amount is typically undefined in this Node.js example.