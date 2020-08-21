let totalSpent = 6000;
let payment = 500;
let discount = 0;

if (totalSpent < 100) {
  console.log('No discount');
} else if (totalSpent >= 100 && totalSpent <= 1000) {
  console.log('Discount 2%');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent <= 5000) {
  console.log('Discount 3%');
  discount = 0.03;
} else {
  console.log('Discount 5%');
  discount = 0.05;
}

payment -= payment * discount;

console.log(
  `Total purchase summ is ${payment} with ${discount * 100}% discount`,
);
totalSpent += payment;
console.log(totalSpent);
