class LightNode {
  constructor() {
    this.eventListeners = {};
  }

  addEventListener(event, callback) {
    if (!this.eventListeners[event]) {
      this.eventListeners[event] = [];
    }
    this.eventListeners[event].push(callback);
  }

  triggerEvent(event) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(callback => callback());
    }
  }

  getOuterHTML() {
    throw new Error('This method should be overridden!');
  }

  getInnerHTML() {
    throw new Error('This method should be overridden!');
  }
}

class LightTextNode extends LightNode {
  constructor(text) {
    super();
    this.text = text;
  }

  getOuterHTML() {
    return this.text;
  }

  getInnerHTML() {
    return this.text;
  }
}

class LightElementNode extends LightNode {
  constructor(tagName, displayType = 'block', selfClosing = false) {
    super();
    this.tagName = tagName;
    this.displayType = displayType;
    this.selfClosing = selfClosing;
    this.children = [];
    this.classes = [];
  }

  addClass(className) {
    this.classes.push(className);
  }

  addChild(child) {
    this.children.push(child);
  }

  getOuterHTML() {
    const classAttribute = this.classes.length > 0 ? ` class="${this.classes.join(' ')}"` : '';
    const innerHTML = this.getInnerHTML();
    return this.selfClosing ? 
      `<${this.tagName}${classAttribute} />` : 
      `<${this.tagName}${classAttribute}>${innerHTML}</${this.tagName}>`;
  }

  getInnerHTML() {
    return this.children.map(child => child.getOuterHTML()).join('');
  }
}

// Test the implementation
const paragraph = new LightElementNode('p');
const text = new LightTextNode('This is a paragraph.');
paragraph.addChild(text);

paragraph.addEventListener('click', () => {
  console.log('Paragraph clicked!');
});

console.log(paragraph.getOuterHTML());

// Trigger the click event
paragraph.triggerEvent('click');
