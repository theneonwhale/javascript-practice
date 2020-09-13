// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci,
// but summing the last 3(instead of 2) numbers of the sequence to generate the next.
// And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature?
// As starting with [0, 1] instead of[1, 1] basically shifts the common Fibonacci sequence by once place,
// you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
// Well, you may have guessed it by now, but to be clear:
// you need to create a fibonacci function that given a signature array / list,
// returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non - negative number; if n == 0,
// then return an empty array(except in C return NULL) and be ready for anything else which is not clearly specified;)
let signature = [1, 1, 1];
const n = 10;

// function tribonacci(signature, n) {
//   for (let i = 0; i < n - 3; i += 1) {
//     signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
//   }
//   return signature.slice(0, n);
// }

function tribonacci(signature, n) {
  for (let i = 0; i <= n - 3; i += 1) {
    let lastThree = signature.length - 3;

    let threeArray = signature.slice(lastThree);

    let sum = 0;

    for (let j = 0; j < threeArray.length; j += 1) {
      sum += threeArray[j];
    }

    signature.push(sum);
  }

  const newArray = [];

  if (n <= 3) {
    for (let i = 0; i < n; i += 1) {
      newArray.push(signature[i]);
    }

    return newArray;
  }

  return signature;
}

console.log(tribonacci(signature, n));
console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([2, 4, 6], 20));
console.log(tribonacci([0, 1], 10));
