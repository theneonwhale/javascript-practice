const magicBtn = document.querySelector('.js-magic-btn');

const addActions = document.querySelectorAll('.js-actions button');
console.log('addActions', addActions[0].dataset.action);
console.log('addActions', addActions[1].dataset.action);
console.log('addActions', addActions[2].dataset.action);
console.log('addActions', addActions[2].dataset);

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log('inputEl', inputEl);
  console.log('inputEl.value', inputEl.value);
  inputEl.value = 'yvubjinwfc';
});
