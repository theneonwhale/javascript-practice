// const cart = [1, 5, 4, 56, 34, 67, 344, 87, 2];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
//   console.log(total);
// }

// for (const item of cart) {
// total += item;
// }
// console.log(total);
// for (let i = 0; i < cart.length; i += 1) {
// cart[i] = Math.ceil(cart[i] * 1.1);
// console.log(cart[i]);
//   total += cart[i];
// }
// console.log(total);

const calculateTotalPrice = function (items) {
  let total = 0;

  for (const item of items) {
    total += item;
  }
  console.log(items);

  return total;
};

const res = calculateTotalPrice([1, 3, 6]);

console.log(`Total price: ${res}`);
// 1. перебрать массиы

// 2ю обьявит переменную total

// 3. каждый элемент приплюсовать к тотал
