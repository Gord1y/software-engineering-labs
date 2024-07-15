const { IProneFactory, KiaomiFactory, BalaxyFactory } = require('./factories');

const iProneFactory = new IProneFactory();
const kiaomiFactory = new KiaomiFactory();
const balaxyFactory = new BalaxyFactory();

const devices = [
  iProneFactory.createLaptop(),
  iProneFactory.createSmartphone(),
  kiaomiFactory.createNetbook(),
  kiaomiFactory.createEBook(),
  balaxyFactory.createLaptop(),
  balaxyFactory.createSmartphone(),
];

devices.forEach(device => {
  console.log(device.getDescription());
});
