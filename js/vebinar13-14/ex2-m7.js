const magicBtn = document.querySelector('.js-magic-btn');

// magicBtn.addEventListener('click', () => {
//   const imgEl = document.querySelector('.hero__image');
//   console.log('imgEl', imgEl);
//   console.log(imgEl.src);
//   imgEl.src =
//     'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
// });
const imgEl = document.querySelector('.hero__image');
// console.log('imgEl', imgEl);
// console.log(imgEl.src);
imgEl.src =
  'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl.textContent);

heroTitleEl.textContent = 'Пирожочек';

imgEl.getAttribute('src');
console.log(imgEl.getAttribute('src'));
console.log(imgEl.src);
imgEl.removeAttribute('src');
imgEl.hasAttribute('src');
console.log(imgEl.hasAttribute('src'));
