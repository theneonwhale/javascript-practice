// const isOnline = true;
// const isFriend = true;
// const isDnd = false;
// const canOpenChat = isOnline && isFriend && !isDnd;
// console.log(`Можно открыть чат?`, canOpenChat);

// const sub = 'pro';
// const canAccessContent = sub === 'pro' || sub === 'vip';
// console.log('Есть доступ к контенту?', canAccessContent);

if (50 > 80) {
  console.log('x > y');
} else {
  console.log('x < y');
}

const salary = 1000;
if (salary > 500 && salary < 1000) {
  console.log('Level 1');
} else if (salary > 1000 && salary < 2000) {
  console.log('Level 2');
} else {
  console.log('Level 3');
}

const balance = -1000;
// let message;

const message = balance >= 0 ? 'Positive balance' : 'Negativw balance';
console.log(message);
