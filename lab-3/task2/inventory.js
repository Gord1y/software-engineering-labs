class InventoryItem {
  constructor(name) {
    this.name = name;
  }

  getDescription() {
    return this.name;
  }
}

class Weapon extends InventoryItem {
  constructor(name) {
    super(name);
  }
}

class Armor extends InventoryItem {
  constructor(name) {
    super(name);
  }
}

class Artifact extends InventoryItem {
  constructor(name) {
    super(name);
  }
}

module.exports = { Weapon, Armor, Artifact };
