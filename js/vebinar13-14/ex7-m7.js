import products from '/js/vebinar13-14/products.js';

console.log(products);

// const product = {
//   name: 'Server',
//   description: 'lorem ipsum dolor',
//   price: 2000,
//   available: true,
//   onSale: true,
// };

// const productEl = document.createElement('article');
// productEl.classList.add('product');

// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');

// const descrEl = document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');

// const priceEl = document.createElement('p');
// priceEl.textContent = `Price: ${product.price} credits.`;
// priceEl.classList.add('product__price');

// console.log(productEl);
// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// productEl.append(nameEl, descrEl, priceEl);
// console.log(productEl);

const productContainerEl = document.querySelector('.js-products');

const makeProductCard = ({ name, description, price }) => {
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  const priceEl = document.createElement('p');
  priceEl.textContent = `Price: ${price} credits.`;
  priceEl.classList.add('product__price');

  productEl.append(nameEl, descrEl, priceEl);

  return productEl;
};

console.log(makeProductCard(products[0]));
console.log(makeProductCard(products[1]));

const elements = products.map(makeProductCard);
console.log('elements', elements);

productContainerEl.append(...elements);
