// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

//   Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

//   Examples
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""

const words = '4of Fo1r pe6ople g3ood th5e the2';

function order(words) {
  // if (words === '') {
  //   return '';
  // }
  const wordsArr = words.split(' ').map(word => word.split(''));
  // const numArr = wordsArr.map(word => word.split(''));
  // return wordsArr;
  // let nums = [];
  let obj = {};
  // for (let i = 0; i < wordsArr.length; i += 1) {
  //   wordsArr[i].forEach(word => {
  //     if (!Number.isNaN(Number(word))) {
  //       nums.push(Number(word));
  //     }
  //   });
  // }
  for (let i = 0; i < wordsArr.length; i += 1) {
    wordsArr[i].forEach(word => {
      if (!Number.isNaN(Number(word))) {
        obj[word] = words.split(' ')[i];
      }
    });
  }

  return Object.values(obj).join(' ');
  // wordsArr.forEach((word, idx) => {
  //   if (!Number.isNaN(Number(word[idx]))) {
  //     nums.push(Number(word[idx]));
  //   }
  // });
}

console.log(order(words));

// 0: (3)["i", "s", "2"]
// 1: (5)["T", "h", "i", "1", "s"]
// 2: (5)["T", "4", "e", "s", "t"]
// 3: (2)["3", "a"]
