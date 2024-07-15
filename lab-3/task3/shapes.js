class Shape {
  constructor(renderer) {
    this.renderer = renderer;
  }

  draw() {
    throw new Error('This method should be overridden!');
  }
}

class Circle extends Shape {
  constructor(renderer) {
    super(renderer);
  }

  draw() {
    this.renderer.renderCircle();
  }
}

class Square extends Shape {
  constructor(renderer) {
    super(renderer);
  }

  draw() {
    this.renderer.renderSquare();
  }
}

class Triangle extends Shape {
  constructor(renderer) {
    super(renderer);
  }

  draw() {
    this.renderer.renderTriangle();
  }
}

module.exports = { Circle, Square, Triangle };
