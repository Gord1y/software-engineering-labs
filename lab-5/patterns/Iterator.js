class DepthFirstIterator {
  constructor(root) {
    this.stack = [root];
  }

  next() {
    if (this.stack.length === 0) {
      return null;
    }

    const node = this.stack.pop();
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        this.stack.push(node.children[i]);
      }
    }
    return node;
  }
}

class BreadthFirstIterator {
  constructor(root) {
    this.queue = [root];
  }

  next() {
    if (this.queue.length === 0) {
      return null;
    }

    const node = this.queue.shift();
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        this.queue.push(node.children[i]);
      }
    }
    return node;
  }
}

module.exports = { DepthFirstIterator, BreadthFirstIterator };
