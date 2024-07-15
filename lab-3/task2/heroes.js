class Hero {
  constructor(name) {
    this.name = name;
    this.inventory = [];
  }

  addInventory(item) {
    this.inventory.push(item);
  }

  getInventory() {
    return this.inventory.map(item => item.getDescription()).join(', ');
  }
}

class Warrior extends Hero {
  constructor(name) {
    super(name);
  }
}

class Mage extends Hero {
  constructor(name) {
    super(name);
  }
}

class Paladin extends Hero {
  constructor(name) {
    super(name);
  }
}

module.exports = { Warrior, Mage, Paladin };
