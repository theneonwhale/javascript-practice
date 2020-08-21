const friends = [
  { name: 'Nick', online: false },
  { name: 'John', online: true },
  { name: 'Mango', online: false },
  { name: 'Bill', online: true },
];
// console.log(friends);
// console.table(friends);
// friends[1].newprop = 666;
// console.table(friends);

// for (const friend of friends) {
//   console.log(friend);

//   console.log(friend.name);
//   console.log(friend.online);

//   friend.newprop = 555;
// }
// console.table(friends);

// const findFriendByName = function (allFriends, name) {
//   return allFriends.includes(allFriends.name);
//   for (const friend of allFriends) {
// console.log(friend.name === name);
//     if (friend.name === name) {
//       return 'Found';
//     }
//   }
//   return 'Not Found';
// };
// console.log(findFriendByName(friends, 'Bill'));
// console.log(findFriendByName(friends, 'Poly'));

// const getAllNames = function (allFriends) {
//   const names = [];
//   for (const friend of allFriends) {
//     console.log(friend.name);
//     names.push(friend.name);
//   }
//   return names;
// };
// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//   const onlineFriends = [];

//   for (const friend of allFriends) {
//     if (friend.online) {
//       onlineFriends.push(friend);
//     }
//   }
//   return onlineFriends;
// };
// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//   const offlineFriends = [];

//   for (const friend of allFriends) {
//     if (!friend.online) {
//       offlineFriends.push(friend);
//     }
//   }
//   return offlineFriends;
// };
// console.log(getOfflineFriends(friends));

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }
    friendsByStatus.offline.push(friend);

    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }
  return friendsByStatus;
};
console.log(getFriendsByStatus(friends));

const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};
console.log(Object.keys(x).length);
