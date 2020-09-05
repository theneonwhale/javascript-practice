/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */

const numbers = [1, 9, 6, 2, 3];
// console.log('numbers', numbers);

// numbers.sort();
// console.log('numbers.sort()', numbers.sort());

const letters = ['b', 'B', 'a', 'A'];
// letters.sort();
// console.log('letters', letters);

const copyNumbers = [...numbers];

copyNumbers.sort((curEl, nextEl) => {
  return curEl - nextEl;
});
// console.log('copyNumbers', copyNumbers);
// console.log('numbers', numbers);

/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
// console.log('ascSortedNumbers', ascSortedNumbers);
// console.log('descSortedNumbers', descSortedNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

const sortedByBestPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => nextPlayer.timePlayed - prevPlayer.timePlayed,
);
console.log('sortedByBestPlayers', sortedByBestPlayers);

const sortedByWorstPlayers = [...players].sort(
  (prevPlayer, nextPlayer) => prevPlayer.timePlayed - nextPlayer.timePlayed,
);
console.log('sortedByWorstPlayers', sortedByWorstPlayers);

const byNames = [...players].sort((a, b) => {
  if (a.name[0] > b.name[0]) {
    return 1;
  } else {
    return -1;
  }
});
console.log('byNames', byNames);
