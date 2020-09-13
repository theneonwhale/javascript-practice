// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string
// with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
const string = 'h3 th2r2';

function encode(string) {
  const arr = [];
  string.split('').forEach(item => {
    if (item === 'a') {
      arr.push(1);
    } else if (item === 'e') {
      arr.push(2);
    } else if (item === 'i') {
      arr.push(3);
    } else if (item === 'o') {
      arr.push(4);
    } else if (item === 'u') {
      arr.push(5);
    } else arr.push(item);
  });
  return arr.join('');
}

console.log(encode(string));

function decode(string) {
  const arr = [];
  string.split('').forEach(item => {
    if (item === '1') {
      arr.push('a');
    } else if (item === '2') {
      arr.push('e');
    } else if (item === '3') {
      arr.push('i');
    } else if (item === '4') {
      arr.push('o');
    } else if (item === '5') {
      arr.push('u');
    } else arr.push(item);
  });
  return arr.join('');
}

console.log(decode(string));
