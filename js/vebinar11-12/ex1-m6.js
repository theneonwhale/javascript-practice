const numbers = [2, 4, 6, 8, 4, 67, 564];

numbers.forEach(function (number, index, array) {
  console.log('number', number);

  //   array[index] = 20;
});

console.log('numbers', numbers);

const doubleNumbers = numbers.map(number => {
  console.log(number);
  return number * 3;
});

console.log('doubleNumbers', doubleNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playersNames = players.map(player => player.name);
console.log('playersNames', playersNames);

const playersIds = players.map(player => player.id);
console.log('playersIds', playersIds);

const res = players.map(({ name, online }) => ({ name, online }));
console.log('res', res);

const updatedPlayers = players.map(player => {
  return {
    ...player,
    points: player.points * 1.1,
  };
});
console.log('updatedPlayers', updatedPlayers);

const playerIdToUpdate = 'player-2';

const updatedPlayers2 = players.map(player =>
  playerIdToUpdate === player.id
    ? { ...player, timePlayed: player.timePlayed + 1000 }
    : player,
);
// {
//   if (playerIdToUpdate === player.id) {
//     console.log('Yes');

//     return {
//       ...player,
//       timePlayed: player.timePlayed + 1000,
//     };
//   }
//   return player;
// });
console.log('updatedPlayers2', updatedPlayers2);
