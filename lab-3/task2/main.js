const { Warrior, Mage, Paladin } = require('./heroes');
const { Weapon, Armor, Artifact } = require('./inventory');

const warrior = new Warrior('Thor');
const mage = new Mage('Merlin');
const paladin = new Paladin('Arthur');

const sword = new Weapon('Sword');
const shield = new Armor('Shield');
const amulet = new Artifact('Amulet');

warrior.addInventory(sword);
warrior.addInventory(shield);
mage.addInventory(amulet);
paladin.addInventory(sword);
paladin.addInventory(amulet);

console.log(`${warrior.name}'s inventory: ${warrior.getInventory()}`);
console.log(`${mage.name}'s inventory: ${mage.getInventory()}`);
console.log(`${paladin.name}'s inventory: ${paladin.getInventory()}`);
