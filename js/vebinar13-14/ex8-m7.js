const titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML);

// titleEl.innerHTML = '<a href="/porfolio">Link</a>';
// titleEl.innerHTML = '';

titleEl.insertAdjacentHTML('afterbegin', '<a href="/porfolio">Link</a>');
titleEl.insertAdjacentHTML('beforeend', '<a href="/porfolio">Link</a>');
