// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment ===> ', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement ===> ', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);

const counter = {
  value: 0,
  increment(value) {
    console.log('increment ===> ', this);
    this.value += 1;
  },
  decrement(value) {
    console.log('decrement ===> ', this);
    this.value -= 1;
  },
};
console.log(document);

const decrementBtn = document.querySelector('.js-decrement');
const incrementBtn = document.querySelector('.js-increment');
const valueEl = document.querySelector('.js-value');
// console.log(decrementBtn);
// console.dir(decrementBtn);

// console.log(incrementBtn);
// console.log(valueEl);

decrementBtn.textContent = 'Суперуменьшить';
decrementBtn.addEventListener('click', function () {
  console.log('Кликнули!');
  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});
incrementBtn.addEventListener('click', function () {
  console.log('Кликнули!');
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});
