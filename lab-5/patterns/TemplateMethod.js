const LightElementNode = require('../elements/LightElementNode');

class TemplatedLightElementNode extends LightElementNode {
  constructor(tagName, displayType = 'block', selfClosing = false) {
    super(tagName, displayType, selfClosing);
    this.onCreated();
  }

  onCreated() {
    console.log(`Element ${this.tagName} created`);
  }

  onInserted() {
    console.log(`Element ${this.tagName} inserted`);
  }

  onRemoved() {
    console.log(`Element ${this.tagName} removed`);
  }

  onStylesApplied() {
    console.log(`Styles applied to ${this.tagName}`);
  }

  onClassListApplied() {
    console.log(`Class list applied to ${this.tagName}`);
  }

  onTextRendered() {
    console.log(`Text rendered in ${this.tagName}`);
  }

  addChild(child) {
    super.addChild(child);
    this.onInserted();
  }

  addClass(className) {
    super.addClass(className);
    this.onClassListApplied();
  }
}

module.exports = TemplatedLightElementNode;
