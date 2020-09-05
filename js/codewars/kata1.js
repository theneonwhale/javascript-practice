const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12, 10];

function highestRank(arr) {
  const allNums = arr.reduce(
    (acc, num) => ({ ...acc, [num]: acc[num] ? acc[num] + 1 : 1 }),
    {},
  );
  console.log('highestRank -> allNums', allNums);

  const k = Object.keys(allNums);
  const v = Object.values(allNums);

  let max = v[0];
  let index = 0;
  let best = '';

  v.forEach((num, idx) => {
    if (num >= max) {
      max = num;
      index = idx;
    }
  });

  best = k[index];

  return Number(best);
}

console.log(highestRank(arr));

// 4: 1
// 6: 1
// 7: 1
// 8: 1
// 10: 3
// 12: 3
