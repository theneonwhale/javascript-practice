const numbers = [34, 5, 76, 24, 88, 44, 55, 77];
// let smallestNumber = numbers[0];
// let biggestNumber = numbers[0];
// for (const number of numbers) {
//   if (number < smallestNumber) {
//     smallestNumber = number;
//   }
// }
// for (const number of numbers) {
//   if (number > biggestNumber) {
//     biggestNumber = number;
//   }
// }
// console.log(smallestNumber);
// console.log(biggestNumber);

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];
  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }
  return smallestNumber;
};
console.log(findSmallestNumber([34, 5, 76, 24, 88, 44, 55, 77]));
