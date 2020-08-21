console.log([]);

const Car = function ({ brand, model, price } = {}) {
  //   const { brand, model, price } = config;
  this.brand = brand;
  this.model = model;
  this.price = price;

  this.changePrice = function (newPrice) {
    this.price = newPrice;
  };
};

Car.prototype.sayHi = function () {
  console.log('Hiiiii');
};
Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};
console.log(Car.prototype);

const myCar = new Car({
  brand: 'Audi',
  model: 'A5',
  price: 100000,
});

myCar.sayHi();
myCar.changePrice(15678900);

console.log(myCar);
const myCar2 = new Car();
console.log(myCar2);
