console.log(0 && false && 6);
console.log(0 || false || 6);
console.log(!false);
console.log(!true);
console.log(!0);

const x1 = 10;
const x2 = 30;
const number = 45;

console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}?`, number > x2);
const res1 = number > x1 && number < x2;
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, res1);
const res2 = number < x1 || number > x2;
console.log(`Число ${number} не попадает в отрезок от ${x1} до ${x2}? `, res2);
