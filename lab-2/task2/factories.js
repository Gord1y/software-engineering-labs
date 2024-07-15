const { Laptop, Netbook, EBook, Smartphone } = require('./devices');

class DeviceFactory {
  createLaptop() {
    throw new Error('This method should be overridden!');
  }

  createNetbook() {
    throw new Error('This method should be overridden!');
  }

  createEBook() {
    throw new Error('This method should be overridden!');
  }

  createSmartphone() {
    throw new Error('This method should be overridden!');
  }
}

class IProneFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop('IProne');
  }

  createNetbook() {
    return new Netbook('IProne');
  }

  createEBook() {
    return new EBook('IProne');
  }

  createSmartphone() {
    return new Smartphone('IProne');
  }
}

class KiaomiFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop('Kiaomi');
  }

  createNetbook() {
    return new Netbook('Kiaomi');
  }

  createEBook() {
    return new EBook('Kiaomi');
  }

  createSmartphone() {
    return new Smartphone('Kiaomi');
  }
}

class BalaxyFactory extends DeviceFactory {
  createLaptop() {
    return new Laptop('Balaxy');
  }

  createNetbook() {
    return new Netbook('Balaxy');
  }

  createEBook() {
    return new EBook('Balaxy');
  }

  createSmartphone() {
    return new Smartphone('Balaxy');
  }
}

module.exports = { IProneFactory, KiaomiFactory, BalaxyFactory };
