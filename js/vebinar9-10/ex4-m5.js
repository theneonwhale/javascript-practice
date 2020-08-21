class Car1 {
  static AAA = 'AAA';
  static description = 'Описание автомобиля';

  constructor({ brand, model, price } = {}) {
    console.log('Выполняется');
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  changeModel(newModel) {
    this.model = newModel;
  }
}
console.log(Car1.description);
console.dir(Car1);

const carInstance = new Car1({ brand: 'Audi', model: 'A5', price: 345000 });
console.log(carInstance);

console.log(Object.getPrototypeOf(carInstance));
console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);
