// const shouldRenew = confirm('Do you want to renew a subscription?');
// console.log(shouldRenew);
// let quantity = prompt('Set quantity of goods');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);
let element = '50px';
element = Number.parseInt(element);
console.log('element: ', element);
let elementFloat = '50.435px';
elementFloat = Number.parseFloat(elementFloat);
console.log('elementfloat: ', elementFloat);
let salary = 456.29369764346;
salary = Number(salary.toFixed(2));
console.log(salary);
console.log(Number(true));
console.log(Number(false));
console.log(Number('true'));
console.log(Number('24354'));
console.log(43 / 0);
console.log(Math.PI);

// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
console.log(2 ** 5);
console.log(Math.sqrt(16));
// let base = prompt('Give a number');
// base = Number(base);
// console.log(base);
// let power = prompt('Give a power');
// power = Number(power);
// console.log(power);
// console.log(base ** power);

// console.log(Math.random());
// const max = 40;
// const min = 35;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

const colors = ['teal', 'tomato', 'orange', 'pink'];
const max = colors.length - 1;
const min = 0;
const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;

const message = 'This is too much';
console.log(message.length);
console.log('fgafsgg' + 'adfaa');
console.log(5 + 'adfaa');

const quantity = 5;
const orderMsg = `вы заказываете ${quantity} холодильников`;
console.log(orderMsg);

// const brand = prompt('give me brand');
// const normalizedBrand = brand.toLowerCase();
// console.log(normalizedBrand);

let brand = 'SamSUng';
console.log(brand[0]);
console.log(brand.slice(1).toLowerCase());
brand = brand[0] + brand.slice(1).toLowerCase();
console.log(brand);

// const blacklistedWord1 = 'спам';
// const blacklistedWord2 = 'распродажа';

// const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
// const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
// const string3 = 'Рекламная кампания #fatlivesmatter';
// console.log(string1.includes(blacklistedWord1));
// console.log(string2.toLowerCase().includes(blacklistedWord2));

// const isEqual = 1 === '1';
// console.log(isEqual);

console.log(Boolean(0));
