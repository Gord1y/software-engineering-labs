class Device {
  constructor(brand, type) {
    this.brand = brand;
    this.type = type;
  }

  getDescription() {
    return `${this.brand} ${this.type}`;
  }
}

class Laptop extends Device {
  constructor(brand) {
    super(brand, 'Laptop');
  }
}

class Netbook extends Device {
  constructor(brand) {
    super(brand, 'Netbook');
  }
}

class EBook extends Device {
  constructor(brand) {
    super(brand, 'EBook');
  }
}

class Smartphone extends Device {
  constructor(brand) {
    super(brand, 'Smartphone');
  }
}

module.exports = { Laptop, Netbook, EBook, Smartphone };
