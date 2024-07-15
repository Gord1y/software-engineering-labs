const { HeroBuilder, EnemyBuilder } = require('./builder');

const heroBuilder = new HeroBuilder();
const enemyBuilder = new EnemyBuilder();

const hero = heroBuilder
  .setHeight('6ft')
  .setHairColor('Blonde')
  .setEyeColor('Blue')
  .setArmor('Steel Armor')
  .setWeapon('Sword')
  .build();

const enemy = enemyBuilder
  .setHeight('5.8ft')
  .setHairColor('Black')
  .setEyeColor('Red')
  .setArmor('Leather Armor')
  .setWeapon('Axe')
  .build();

console.log('Hero:', hero);
console.log('Enemy:', enemy);
