const friends = ['Marcus', 'Grisha', 'Sam', 'Franchesca'];
// let string = '';
// for (const friend of friends) {
//   string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
const string = friends.join(',');
console.log(string);
