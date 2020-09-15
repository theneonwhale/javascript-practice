const magicBtn = document.querySelector('.js-magic-btn');

// console.log(window);
// console.log(document);
// console.dir(document);

// const navEl = document.querySelector('ul');
// console.log('navEl', navEl);
// console.dir(navEl);

magicBtn.addEventListener('click', () => {
  const navEl = document.querySelector('.site-nav');
  console.log('navEl', navEl);

  const navLinksEl = document.querySelectorAll('.site-nav__link');
  console.log('navLinksEl', navLinksEl);
});

// const navItemEl = document.querySelector('.site-nav__item');
// console.log('navEl', navItemEl);

// const navNullEl = document.querySelector('qwe');
// console.log('navNullEl', navNullEl);

// const navLinksEl = document.querySelectorAll('.site-nav__link');
// console.log('navLinksEl', navLinksEl);
