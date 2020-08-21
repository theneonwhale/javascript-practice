// console.log(true + false);
// console.log([] + false - null + true);
// console.log(null == undefined);
// alert(str);
// let str = 'Hello';
// break me;
// console.log(4 - '5' + 0xf - '1e1');
// console.dir(_);
// const friends = ['Mango', 'Kiwi', 'Roxi'];
// console.log(friends);
// console.log(friends.length);
// console.table(friends);
// let n = 45;
// let sum = 0;
// function sumDigits(n) {
//   return ((n - 1) % 9) + 1;
// }
// function sumDigits(number) {
//   number = number.toString();
//   const nArr = number.split('');
//   for (let i = 0; i <= nArr.length; i += 1) {
// n = Number.nArr[i];
// sum += n;
//     //     return sum;
//   }
//   console.log(sum);

//   return sum;
// console.log(nArr);
// return nArr;
// }
// console.log(n);
// function capitalize(s) {
//   let evenArr = [];
//   let oddArr = [];
//   let capArr = [];
//   for (const i in s) {
//     if (i % 2 === 0) {
//       evenArr.push(s[i].toUpperCase());
//     } else {
//       evenArr.push(s[i].toLowerCase());
//     }
//   }
//   evenArr = evenArr.join('');
//   for (const i in s) {
//     if (i % 2 !== 0) {
//       oddArr.push(s[i].toUpperCase());
//     } else {
//       oddArr.push(s[i].toLowerCase());
//     }
//   }
//   oddArr = oddArr.join('');
//   capArr.push(evenArr, oddArr);
//   return capArr;
// }

// console.log(capitalize('jxtgdg'));

// function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
//   let ageArr = Array.from(arguments);
//   let total = 0;
//   for (let i = 0; i < ageArr.length; i += 1) {
//     ageArr[i] *= ageArr[i];
//   }
//   for (let i = 0; i < ageArr.length; i += 1) {
//     total += ageArr[i];
//   }
//   return Math.floor(Math.sqrt(total) / 2);
// }
// console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));

// function highAndLow(numbers) {
//   const arr = numbers.split(' ');
//   let max = Number(arr[0]);
//   let min = Number(arr[0]);
//   for (const num of arr) {
//     if (Number(num) > max) {
//       max = Number(num);
//     }
//     if (Number(num) < min) {
//       min = Number(num);
//     }
//   }
//   return `${max} ${min}`;
// }
// console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));

// const fn = function (x, y) {
//   return x + y;
// };
// console.log(fn(2, 6));
// function longest(s1, s2) {
//   const arr = s1.split('').concat(s2.split('')).sort();
//   let longestStrArr = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     if (longestStrArr.indexOf(arr[i]) === -1) {
//       longestStrArr.push(arr[i]);
//     }
//   }
//   return longestStrArr.join('');
// }
// console.log(longest('udfhvwfieovhfv', 'wiefbiweciewruhf'));

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// function calculateTotalPrice(array, prop) {
// 'use strict';
// Write code under this line
//   let totalPrice = 0;

//   for (let obj of array) {
//     for (let key in obj) {
//       if (obj[key] === prop) {
//         let total = obj.quantity * obj.price;
//         totalPrice += total;
//       }
//     }
//   }
//   return totalPrice;
// }

// console.log(calculateTotalPrice(products, 'Радар'));

// const findBestEmployee = function (employees) {
//   'use strict';
// Write code under this line
//   if (Object.keys(employees).length === 0) {
//     return '';
//   }
//   const entries = Object.entries(employees);
//   let bestEmployee = entries[0];
//   for (const employee of entries) {
//     if (employee[1] > bestEmployee[1]) {
//       bestEmployee = employee;
//     }
//   }
//   return bestEmployee[0];
// };

// Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// 'lux'

// const sell = {};
// console.log(findBestEmployee(sell));
// console.log(0.1 + 0.2);
// function songDecoder(song) {
//   const arr = song.split('WUB');
//   let text = [];

//   for (let el of arr) {
//     if (el !== '') {
//       text.push(el);
//     }
//   }

//   return text.join(' ');
// }
// console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

// const filter = function (array, test) {
//   const filteredElements = [];

//   for (const element of array) {
//     const passed = test(element);

//     if (passed) {
//       filteredElements.push(element);
//     }
//   }

//   return filteredElements;
// };

// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes

// const rounder = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };
// const a = rounder(3);
// console.log(a(1.7654));
// console.dir(a);

// function list(names) {
//   const l = { ...names };
//   console.log(l);
// }
// list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]);
