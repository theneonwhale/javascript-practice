const navEl = document.querySelector('.site-nav');
console.log('navEl', navEl);

// const firstNavItemEl = navEl.querySelector('.site-nav__item');

// console.log('firstNavItemEl', firstNavItemEl);

const firstNavItemEl = navEl.firstElementChild;
console.log('firstNavItemEl', firstNavItemEl);
console.log(navEl.children);
console.log(navEl.lastElementChild);
