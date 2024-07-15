const LightNode = require('./LightNode');

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

module.exports = LightElementNode;
