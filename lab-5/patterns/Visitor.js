class Visitor {
  visit(element) {
    throw new Error('Visit method should be overridden!');
  }
}

class StyleVisitor extends Visitor {
  constructor(styles) {
    super();
    this.styles = styles;
  }

  visit(element) {
    element.styles = this.styles;
    element.onStylesApplied();
  }
}

class ClassListVisitor extends Visitor {
  constructor(classes) {
    super();
    this.classes = classes;
  }

  visit(element) {
    element.classes = this.classes;
    element.onClassListApplied();
  }
}

module.exports = { Visitor, StyleVisitor, ClassListVisitor };
