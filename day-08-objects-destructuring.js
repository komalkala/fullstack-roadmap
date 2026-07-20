// [ ] Object basics
// [ ] Access object values
// [ ] Add / update object values
// [ ] Destructuring
// [ ] Rename while destructuring
// [ ] Default values
// [ ] Spread operator
// [ ] Rest operator
// [ ] Real project examples



// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
//   status: "ACTIVE",
// };

// console.log(customer.name);
// console.log(customer.email);
// console.log(customer.status);


//update
// const customer = {
//   name: "Komal",
//   status: "ACTIVE",
// };

// customer.status = "INACTIVE";

// console.log(customer);



// new property in object
// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
// };

// customer.phone = "9876543210";

// console.log(customer);



// Destructuring

// Destructuring means taking values out from object in a clean way.

// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
//   status: "ACTIVE",
// };

// console.log(customer.name);
// console.log(customer.email);

// // Destructuring way:

// // const { name, email } = customer;

// // console.log(name);
// // console.log(email);


// // Rename while destructuring
// // Sometimes backend key name is different, but we want a clean variable name.


// const customer = {
//   customerName: "Komal",
//   customerEmail: "komal@example.com",
// };

// const { customerName: name, customerEmail: email } = customer;

// console.log(name);
// console.log(email);

// // customerName: name
// // Take customer.customerName and store it in variable name




// //Default values
// //Default value is used when a key is missing from object.


// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
// };

// const { name, status = "ACTIVE" } = customer;

// console.log(name);
// console.log(status);



// // Spread operator
// // Spread operator is written like this: ...
// // It is used to copy object values.


// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
// };

// const updatedCustomer = {
//   ...customer,
//   status: "ACTIVE",
// };

// console.log(updatedCustomer);

// // ...customer → copy all old customer values
// // status      → add new value


// // Important — Spread can also update existing value

// const payment = {
//   paymentNo: "PAY-1001",
//   amount: 500,
//   status: "PENDING",
// };

// const updatedPayment = {
//   ...payment,
//   status: "PAID",
// };

// console.log(updatedPayment);

// // When same key comes again, last value wins



// // Rest operator

// // Rest operator also uses: ...

// // But meaning depends on where we use it.

// // In destructuring, rest means:

// // take remaining values


// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
//   status: "ACTIVE",
//   phone: "9876543210",
// };

// const { name, email, ...otherDetails } = customer;

// console.log(name);
// console.log(email);
// console.log(otherDetails);


// // name and email → taken separately
// // ...otherDetails → remaining keys



// Destructuring in function parameters

// This is very common in React props.


// // Normal way:

// function showPayment(payment) {
//   console.log(payment.paymentNo);
//   console.log(payment.amount);
// }

// showPayment({
//   paymentNo: "PAY-1001",
//   amount: 500,
// });

// // Destructuring way:

// function showPayment({ paymentNo, amount }) {
//   console.log(paymentNo);
//   console.log(amount);
// }

// showPayment({
//   paymentNo: "PAY-1001",
//   amount: 500,
// });