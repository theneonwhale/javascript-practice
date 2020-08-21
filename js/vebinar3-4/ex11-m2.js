const array1 = [10, 20, 5, 43, 66];
const array2 = [50, 60, 7, 48];
const numbers = array1.concat(array2);
let total = 0;

console.log(numbers);
for (const number of numbers) {
  total += number;
}
console.log(total);
