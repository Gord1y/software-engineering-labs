class HeroBuilder {
  constructor() {
    this.hero = {};
  }

  setHeight(height) {
    this.hero.height = height;
    return this;
  }

  setHairColor(color) {
    this.hero.hairColor = color;
    return this;
  }

  setEyeColor(color) {
    this.hero.eyeColor = color;
    return this;
  }

  setArmor(armor) {
    this.hero.armor = armor;
    return this;
  }

  setWeapon(weapon) {
    this.hero.weapon = weapon;
    return this;
  }

  build() {
    return this.hero;
  }
}

class EnemyBuilder {
  constructor() {
    this.enemy = {};
  }

  setHeight(height) {
    this.enemy.height = height;
    return this;
  }

  setHairColor(color) {
    this.enemy.hairColor = color;
    return this;
  }

  setEyeColor(color) {
    this.enemy.eyeColor = color;
    return this;
  }

  setArmor(armor) {
    this.enemy.armor = armor;
    return this;
  }

  setWeapon(weapon) {
    this.enemy.weapon = weapon;
    return this;
  }

  build() {
    return this.enemy;
  }
}

module.exports = { HeroBuilder, EnemyBuilder };
