const fn = function (a, b, c, ...args) {
  //   const args = Array.from(arguments);
};

fn(1, 2, 3, 4, 5, 6, 7);
fn(1, 2, 3);

const add = function (...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }
  return total;
};
console.log(add(1, 2, 3, 4, 5));

const filterNumber = function (array, ...args) {
  const uniqueEl = [];

  for (const el of array) {
    if (args.includes(el)) {
      uniqueEl.push(el);
    }
  }

  return uniqueEl;
};

console.log(filterNumber([1, 2, 3, 6, 7], 1, 2, 3, 4, 5));
