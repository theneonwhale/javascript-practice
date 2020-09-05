const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const isAllOnline = players.every(({ online }) => online);
console.log('isAllOnline', isAllOnline);

const isAnyOnline = players.some(({ online }) => online);
console.log('isAnyOnline', isAnyOnline);

const anyHardcorePlayers = players.some(({ points }) => points > 70);
console.log('anyHardcorePlayers', anyHardcorePlayers);
