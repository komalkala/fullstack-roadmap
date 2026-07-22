
// Optional Chaining, Nullish Coalescing & Safe API Data Handling
// [ ] undefined vs null
// [ ] Optional chaining ?.
// [ ] Nullish coalescing ??
// [ ] OR fallback ||
// [ ] Safe nested object access
// [ ] Real API examples


// const customer = {
//   name: "Komal",
//   email: "komal@example.com",
// };

// console.log(customer.name);
// console.log(customer.address.city);



// Topic 2 — Without optional chaining error

const booking = {
  bookingNo: "BK-1001",
  status: "CONFIRMED",
};

console.log(booking.bookingNo);
console.log(booking.customer.name);

// Optional chaining with deeper data

const customer = {
  name: "Komal",
  address: {
    city: "Delhi",
  },
};

console.log(customer.address?.city);
console.log(customer.address?.postcode);
console.log(customer.company?.name);


// Nullish coalescing ??

const payment = {
  amount: 0,
};

const amount1 = payment.amount ?? 500;
const amount2 = payment.amount || 500;

console.log(amount1);
console.log(amount2);



// Real API data handling

const booking = {
  bookingNo: "BK-1001",
  customer: null,
  amount: 0,
};

const customerName = booking.customer?.name ?? "Guest Customer";
const amount = booking.amount ?? 0;

console.log(customerName);
console.log(amount);