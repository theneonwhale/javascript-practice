/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);

// function onInputFocus() {
//   console.log('Инпут получил фокус - событие focus');
// }

// refs.input.addEventListener('blur', onInputBlur);

// function onInputBlur() {
//   console.log('Инпут потерял фокус - событие blur');
// }

// refs.input.addEventListener('change', onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

// refs.input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
//   refs.nameLabel.textContent = event.currentTarget.value;
// }

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  refs.nameLabel.textContent = event.currentTarget.value;
}

refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onLicenseChange(event) {
  console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked;
}
