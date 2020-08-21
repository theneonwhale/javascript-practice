const numbers = [1, 24, 5, 56, 65, 87, 44, 55, 77];
let total = 0;
for (const number of numbers) {
  if (number % 2 === 0) {
    total += number;
  }
}
console.log(total);
// for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         total += numbers[i];
//     }
// }
for (const number of numbers) {
  if (number % 2 !== 0) {
    continue;
  }
  total += number;
}
console.log(total);
