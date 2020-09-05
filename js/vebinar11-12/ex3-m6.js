const numbers = [2, 4, 6, 8, 4, 67, 564];

const foundednumber = numbers.find(number => number === 564);
console.log('foundednumber', foundednumber);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playerIdToFind = 'player-3';

const playerWithId = players.find(({ id }) => id === playerIdToFind);
console.log('playerWithId', playerWithId);

const findPlayerById = (allPlayers, playerId) =>
  allPlayers.find(({ id }) => id === playerId);

console.log(
  "findPlayerById(players, 'player-5')",
  findPlayerById(players, 'player-5'),
);
