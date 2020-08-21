const btnAdd = document.querySelector('button[data-add]');
const valueInpt = document.querySelector('input[data-value]');
const resetBtn = document.querySelector('button[data-reset]');
const outputEl = document.querySelector('.js-output span');
let total = 0;

btnAdd.addEventListener('click', function () {
  console.log('click hahahhaha');
  const value = Number(valueInpt.value);
  console.log(value);
  total += value;
  outputEl.textContent = total;
  console.log(total);
  valueInpt.value = '';
});

resetBtn.addEventListener('click', function () {
  total = 0;
  outputEl.textContent = total;
});

console.log(btnAdd.textContent);
