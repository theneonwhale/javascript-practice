function findLongestWord(string = '') {
  // Write code under this line
  const strArr = string.split(' ');
  let longestWord = strArr[0];
  for (const word of strArr) {
    if (longestWord.length < word.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

// 1. Преобразовать строку в массив

// 2. сравнить длину каждого элемента массива

// 3. вывести результат
//
// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""),
// которая принимает параметром произвольную строку(в строке будут только слова и пробелы)
// и возвращает самое длинное слово в этой строке.

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'
