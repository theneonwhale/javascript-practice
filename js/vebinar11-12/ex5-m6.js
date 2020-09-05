const numbers = [2, 4, 6, 8, 4, 67, 564];

const total = numbers.reduce((acc, number) => {
  //   console.log('acc', acc);
  //   console.log('number', number);
  return acc + number;
}, 0);
// console.log('total', total);

const salary = {
  poly: 300,
  marge: 400,
  lisa: 500,
};

const totalSalary = Object.values(salary).reduce((acc, itm) => acc + itm, 0);
// console.log('totalSalary', totalSalary);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTmePlayers = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);
// console.log('totalTmePlayers', totalTmePlayers);

const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

const totalCart = cart.reduce(
  (total, { price, quantity }) => (total += price * quantity),
  0,
);
// console.log('totalCart', totalCart);

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log('allTags', allTags);

// const allStars = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

const allStars = allTags.reduce(
  (acc, tag) =>
    //   console.log(acc);

    //   if (acc[tag]) {
    //     return {
    //       ...acc,
    //       [tag]: acc.tag + 1,
    //     };
    //   }

    //   return {
    //     ...acc,
    //     [tag]: 1,
    //     };

    ({
      ...acc,
      [tag]: acc[tag] ? acc[tag] + 1 : 1,
    }),
  {},
);
console.log('allStars', allStars);
