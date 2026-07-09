let amount = 100;

function createPayment() {
  let amount = 500;

  return function updatePayment(value) {
    amount += value;
    return amount;
  };
}

const updateFirstPayment = createPayment();
const updateSecondPayment = createPayment();

console.log(updateFirstPayment(100));
console.log(updateFirstPayment(200));
console.log(updateSecondPayment(50)); 