const magicBtn = document.querySelector('.js-magic-btn');

const navEl = document.querySelector('.site-nav');
// console.log('navEl', navEl);
console.log(navEl.classList);
navEl.classList.add('super-cool', 'urhfirj');
navEl.classList.remove('site-nav');
navEl.classList.replace('super-cool', 'super');
navEl.classList.contains('super');
console.log(
  "navEl.classList.contains('super')",
  navEl.classList.contains('super'),
);

// magicBtn.addEventListener('click', () => {
//   const navEl = document.querySelector('.site-nav');
//   console.log('navEl', navEl);
//   console.log(navEl.classList);
//   navEl.classList.add('super-cool', 'urhfirj');
//   navEl.classList.remove('site-nav');
// });

magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('qwerty');
});

const currentPage = '/portfolio';

const linkEl = document.querySelector(`.site-nav__link[href="${currentPage}"]`);
console.log('linkEl', linkEl);

linkEl.classList.add('site-nav__link--current');
