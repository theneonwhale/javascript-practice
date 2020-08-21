// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';
// console.log(letters);
// for (const letter of letters) {
//   if (letter === letter.toLowerCase()) {
//     console.log(letter);
//     invertedString += letter.toUpperCase();
//   } else {
//     invertedString += letter.toLowerCase();
//     }
//   invertedString =
//     letter === letter.toLowerCase()
//       ? (invertedString += letter.toUpperCase())
//       : (invertedString += letter.toLowerCase());
// }
// console.log(invertedString);

const changeCase = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};
console.log(changeCase('JavaScript'));
