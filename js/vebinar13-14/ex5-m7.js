const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'This is title!';
console.log('titleEl', titleEl);

document.body.appendChild(titleEl);
console.log(document.body);

const imgEl = document.createElement('img');
imgEl.src =
  'https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
imgEl.alt = 'alter-text';
imgEl.width = 460;
console.log('imgEl', imgEl);

document.body.appendChild(imgEl);

const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'this is link';
navLinkEl.href = 'google.com';

navItemEl.appendChild(navLinkEl);

console.log(navItemEl);
console.log(navLinkEl);

const navEl = document.querySelector('.site-nav');
navEl.appendChild(navItemEl);

console.log(navEl);

navEl.insertBefore(navItemEl, navEl.firstElementChild);

const heroEl = document.querySelector('.hero');

heroEl.append(titleEl, imgEl);
