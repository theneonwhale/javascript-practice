const num = 7;

const arr = [9, 8, 7];

const numbers = [0, 5, 10, ...[3, 3, 3], ...[1, 2, 3], 4, 5, ...arr, num];

console.log(numbers);

const temps = [34, 65, 7, 89, 45, 33];

console.log(Math.min(34, 65, 7, 89, 45, 33));
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
const b = [...a];

console.log(a);
console.log(b);

console.log(a[0] === b[0]);
console.log(a === b);

a[1].x = 1000;

console.log(a);
console.log(b);

const tempLast = [1, 2, 3];
const tempCurrent = [4, 5, 6];
const tempNext = [7, 8, 9];

const allTemps = [...tempLast, ...tempCurrent, ...tempNext];
console.log(allTemps);

const f = { a: 1, b: 5, o: { world: 'hello' } };
const g = { e: 1, b: 8 };
// const m = { b: 10 };
const m = Object.assign({ b: 10 }, f, g);
console.log(m);
const j = { ...f, ...g };
console.log(j);

const h = { c: 1, b: 8, c: 5 };
console.log(h);

console.log(...'tools');

const defSet = {
  user: 'John',
  online: true,
  status: 'busy',
};
const userSet = {
  user: 'Bill',
  online: true,
  status: 'free',
};
const finalSet = {
  ...defSet,
  ...userSet,
};
console.log(finalSet);
