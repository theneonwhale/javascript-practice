class Hero {
  constructor({ name = 'hero', xp = 0 } = {}) {
    this.name = name;
    this.xp = xp;
  }

  gainXp(amount) {
    console.log(`Hero ${this.name} gets ${amount} of expirience`);
    this.xp += amount;
  }
}

const mango = new Hero({ name: 'Mango', xp: 100 });

console.log(mango);
mango.gainXp(300);
console.log(mango);

class Warrior extends Hero {
  constructor({ name = 'hero', xp = 0, weapon = 'no' } = {}) {
    super({ name, xp });
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} has attacked with ${this.weapon}`);
  }
}

class Berserk extends Warrior {
  constructor({ warcry = 'arrggh', ...restProps } = {}) {
    super(restProps);

    this.warcry = warcry;
  }

  babyRage() {
    console.log(this.warcry);
  }
}
const apple = new Warrior({ name: 'Apple', xp: 100, weapon: 'Alebarda' });

console.log(apple);

apple.gainXp(600);
console.log(apple);

console.log(apple.__proto__ === Warrior.prototype);
console.log(Warrior.prototype.__proto__ === Hero.prototype);
console.log(Object.getPrototypeOf(apple) === Warrior.prototype);

class Mage extends Hero {
  constructor({ spells = [], ...restProps } = {}) {
    super(restProps);
    this.spells = spells;
  }
}
const melon = new Mage({
  name: 'Melon',
  xp: 100,
  spells: ['fire', 'water', 'wind'],
});

console.log(melon);

melon.gainXp(800);
console.log(melon);

console.log(Mage.prototype);
console.log(Warrior.prototype);
console.log(Hero.prototype);
apple.attack();
apple.gainXp(50);

const ajax = new Berserk({
  name: 'Ajax',
  xp: 200,
  weapon: 'Axe',
  warcry: 'arrrggrrgrrrgh',
});
ajax.babyRage();
