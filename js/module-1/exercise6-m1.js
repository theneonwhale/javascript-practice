// let input = prompt('Input number');
let input = prompt('Input number');

let total = 0;

while (true) {
  //   let input = prompt('Input number');
  //   let total = 0;
  total += Number(input);
  if (isFinite(input) !== true) {
    break;
  }
  //   console.log(alert(`Общая сумма чисел равна ${total}`));
}
console.log(alert(`Общая сумма чисел равна ${total}`));

// if (isFinite(input) !== true) {
//   console.log('Not a number');
// } else {
//   for (total = 0; isFinite(input) === true; total += input) {
//     input = Number(input);
//   }
// }

// console.log(alert(`Общая сумма чисел равна ${total}`));
// while (isFinite(input) === true) {
//   total += Number(input);
// }
// console.log(alert(`Общая сумма чисел равна ${total}`));

// if (isFinite(input) === true) {
//   total += Number(input);
// } else {
//   console.log('Not a number');
// }
// console.log(alert(`Общая сумма чисел равна ${total}`));
