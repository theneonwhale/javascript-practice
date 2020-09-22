/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', handleTargetButtonClick);

// function handleTargetButtonClick() {
//   console.log('Click');
// }

// function targetButtonClickHandler() {
//   console.log('Click');
// }

// function onTargetButtonClick() {
//   console.log('Click');
// }

addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Adding EventListener on target button');

  targetBtn.addEventListener('click', onTargetBtnClick);
});

removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Removing EventListener from target button');

  targetBtn.removeEventListener('click', onTargetBtnClick);
});

function onTargetBtnClick(event) {
  console.log(event);
  console.log('Click on target button');
}
