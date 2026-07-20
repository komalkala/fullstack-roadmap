// const request = fetch(
//   "https://jsonplaceholder.typicode.com/users/1"
// );

// console.log(request);

// //Using await

// async function getUser() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users/1"
//   );

//   console.log(response);
// }

// getUser();


// response.json()

async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const user = await response.json();

  console.log(user);
}

getUser();



// Display selected values

async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  const user = await response.json();

  console.log(user.id);
  console.log(user.name);
  console.log(user.email);
}

getUser();


async function getBooking() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  const booking = await response.json();

  console.log(booking.title);
}

getBooking();