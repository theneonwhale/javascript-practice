const objC = {
  z: 5,
};
console.log(objC);
console.log(objC.hasOwnProperty('z'));
console.log(objC.hasOwnProperty('t'));

const objB = Object.create(objC);
objB.y = 2;
console.log(objB);
console.log(objB.y);
console.log(objB.z);

const objA = Object.create(objB);
objA.x = 9;
console.log(objA);
console.log(objA.x);
console.log(objA.y);
console.log(objA.z);

objA.z = 1000;

console.log(objA.z);
console.log(objC.z);
console.log(objA);
