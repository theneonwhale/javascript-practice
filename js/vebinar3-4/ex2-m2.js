// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);
// a = 20;
// console.log(a);
// console.log(b);

let a = [1, 2, 3];
let b = a;
console.log(a);
console.log(b);
a[0] = 500;
console.log(a);
console.log(b);
console.log(a === b);
console.log([1, 2, 3] === [1, 2, 3]);
