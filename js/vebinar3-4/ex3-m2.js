const friends = ['Vasa', 'Irina', 'Susanna', 'Bonny'];

for (let i = 0; i <= friends.length - 1; i += 1) {
  friends[i] += `-${i}`;
  console.log(friends[i]);
}
for (const friend of friends) {
  console.log(friend);
}
