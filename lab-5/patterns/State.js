class State {
  constructor(name) {
    this.name = name;
  }

  apply(element) {
    throw new Error('Apply method should be overridden!');
  }
}

class VisibleState extends State {
  constructor() {
    super('visible');
  }

  apply(element) {
    element.isVisible = true;
    console.log(`Element ${element.tagName} is now visible`);
  }
}

class HiddenState extends State {
  constructor() {
    super('hidden');
  }

  apply(element) {
    element.isVisible = false;
    console.log(`Element ${element.tagName} is now hidden`);
  }
}

class HighlightedState extends State {
  constructor() {
    super('highlighted');
  }

  apply(element) {
    element.isHighlighted = true;
    console.log(`Element ${element.tagName} is now highlighted`);
  }
}

module.exports = { State, VisibleState, HiddenState, HighlightedState };
