// 'JavaScript is awesome'.length;
// console.log('JavaScript is awesome'.length);
// 'JavaScript is awesome'.toUpperCase();
// console.log('JavaScript is awesome'.toUpperCase());
// let age;
// const yearOfBirth = 2006;
// console.log(yearOfBirth);
// console.log(age);
// age = 14;
// console.log(age);
// const COLOR_TEAL = '#009688';
// const MESSAGE_LOGIN_SUCCESS = 'Добро пожаловать!';
// let name;
// console.log(name);
// console.log(age);
// let a;
// console.log(typeof a); // "undefined"

// null
const b = null;
console.log(typeof null); // "object"

// Number
const c = 5;
console.log(typeof c); // "number"

// String
const d = 'JavaScript is awesome!';
console.log(typeof d); // "string"

// Boolean
const e = false;
console.log(typeof e); // "boolean"
const fruit = 'mango';
console.log('My name is: ', fruit);
// const message = 'hello';
// alert(message);

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// // Операции с числами
// const x = 10;
// const y = 5;

// // Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// // Остаток от деления
// console.log(x % y); // 0

// Сложение с заменой (есть и для других операторов)
let value = 5;

// Аналогично записи value = value + 10;
value += 10;
console.log(value); // 15

const x = 5;
const y = 10;
const z = 5;

console.log('x > y:', x > y); // false
console.log('x < y:', x < y); // true
console.log('x < z:', x < z); // false
console.log('x <= z:', x <= z); // true
console.log('x === y:', x === y); // false
console.log('x === z:', x === z); // true
console.log('x !== y:', x !== y); // true
console.log('x !== z:', x !== z); // false

console.log(0.1 + 0.2 === 0.3);
console.log(0.1 + 0.2 + 0.3);

console.log(Math.ceil(1.2));
console.log(Math.floor(1.7));
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * (10 - 1) + 1);
console.log(Math.random() * (10 - 1));

const name = 'Mango';
const age = 2;
const mood = 'happy';

const message =
  'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '.';
console.log(message);

const sameMessage = `My name is ${name}, I'm ${age} years old and ${mood}.`;

console.log(sameMessage);

console.log(`Результат сложения равен ${2 + 2}.`);
console.log(`Результат сложения равен ${234 + 25766}.`);

const num1 = 5;
const num2 = 10;
let biggerNumber;

if (num1 > num2) {
  biggerNumber = num1;
} else {
  biggerNumber = num2;
}
console.log(biggerNumber);

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);
const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}
const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
