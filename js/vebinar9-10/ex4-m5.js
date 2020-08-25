class Car1 {
  static AAA = 'AAA';
  static description = 'Описание автомобиля';

  static logInfo(carObj) {
    console.log('Car1 -> logInfo -> carObj', carObj);
  }

  #test = 'test';

  mySuperPublicField = 555;

  constructor({ brand, model, price } = {}) {
    console.log('Выполняется');
    this.brand = brand;
    this._model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;

    console.log(this.#test);
  }

  // setModel(newModel) {
  //   this.model = newModel;
  // }

  get model() {
    return this._model;
  }

  set model(newModel) {
    this._model = newModel;
  }
  // getModel() {
  //   return this.model;
  // }
}
console.log(Car1.description);
console.dir(Car1);

const carInstance = new Car1({ brand: 'Audi', model: 'A5', price: 345000 });
console.log(carInstance);

Car1.logInfo(carInstance);

console.log(Object.getPrototypeOf(carInstance));
console.log(Object.getPrototypeOf(carInstance) === Car1.prototype);

console.log(carInstance.test);

carInstance.changePrice(200200);
// console.log(carInstance.getModel());
// carInstance.setModel('rav');
// console.log(carInstance.getModel());
console.log(carInstance.model);
carInstance.model = 'guru';
console.log(carInstance.model);

const obj = {
  _a: 100,
  get a() {
    return this._a;
  },
  set a(x) {
    this._a = x;
  },
};
console.log(obj);
