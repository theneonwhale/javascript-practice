const fnA = function (message, callback) {
  console.log(message);
  // console.log(callback);
  callback(100);
};
const fnB = function (number) {
  console.log('log fnB', number);
};
fnA('eevergvrv', fnB);

const doMath = function (a, b, callback) {
  const result = callback(a, b);
  console.log(result);
};
const add = function (x, y) {
  return x + y;
};
const sum = function (x, y) {
  return x * y;
};
doMath(2, 3, function (x, y) {
  return x + y;
});
doMath(2, 3, function (x, y) {
  return x * y;
});

const buttonRef = document.querySelector('.js-button');
const handleBtnClick = function () {
  console.log('Click on the btn ' + Date.now());
};
console.dir(buttonRef);
buttonRef.addEventListener('click', function () {
  console.log('Click on the btn ' + Date.now());
});

function addEventListener(eventType, callback) {
  if (eventType === event) {
    callback();
  }
}

// const onGetPositionSuccess = function (position) {
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//   onGetPositionSuccess,
//   onGetPositionError,
// );
// const onGetPositionSuccess = function (position) {
//   console.log('Это вызов onGetPositionSuccess');
//   console.log(position);
// };

// const onGetPositionError = function (error) {
//   console.log('Это вызов onGetPositionError');
//   console.log(error);
// };

// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess,
//     onGetPositionError,
// );

const callback = function () {
  console.log('Через 2 секунды внутри колбека в таймауте');
};

console.log('В коде перед таймаутом');
setTimeout(callback, 3000);
console.log('В коде после таймаута');

/*
 * Отложенный вызов: http-запрос
 * - API URL: https://pokeapi.co/api/v2/pokemon
 */

const onRequestSuccess = function (response) {
  console.log('Вызов функции onRequestSuccess после успешного ответа бекенда');
  console.log(response);
};

fetch('https://pokeapi.co/api/v2/pokemon')
  .then(res => res.json())
  .then(onRequestSuccess);
