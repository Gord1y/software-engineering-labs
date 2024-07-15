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

module.exports = LightNode;
