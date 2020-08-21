// const showThis = function (a, b, c, d, e, f) {
//   console.log('show this', this);
//   console.log(a, b, c, d, e, f);
// };
// console.dir(showThis);
// showThis();

// const obj = {
//   a: 5,
//   b: 10,
// };

// showThis.call(obj, 34, 7, 245, 67, 22, 789, 454);

const changeColor = function (color) {
  console.log('change color', this);
  this.color = color;
};
const hat = {
  color: 'blue',
  //   changeColor(color) {
  //     console.log('change color', this);
  //     this.color = color;
  //   },
};

const sweater = {
  color: 'green',
  //   changeColor(color) {
  //     console.log('change color', this);
  //     this.color = color;
  //   },
};

changeColor.call(hat, 'red');
console.log(hat);
changeColor.call(sweater, 'orange');
console.log(sweater);

const changeHatColor = changeColor.bind(hat);
const changeSweaterColor = changeColor.bind(sweater);

changeHatColor();
changeSweaterColor();
