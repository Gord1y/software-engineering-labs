class Virus {
  constructor(name, weight, age, type) {
    this.name = name;
    this.weight = weight;
    this.age = age;
    this.type = type;
    this.children = [];
  }

  addChild(virus) {
    this.children.push(virus);
  }

  clone() {
    const cloned = new Virus(this.name, this.weight, this.age, this.type);
    this.children.forEach(child => cloned.addChild(child.clone()));
    return cloned;
  }

  getDescription() {
    return `Virus: ${this.name}, Weight: ${this.weight}, Age: ${this.age}, Type: ${this.type}, Children: ${this.children.length}`;
  }
}

module.exports = Virus;
