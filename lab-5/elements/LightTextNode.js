const LightNode = require('./LightNode');

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

module.exports = LightTextNode;
