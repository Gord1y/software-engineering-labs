class VectorRenderer {
  renderCircle() {
    console.log('Drawing Circle as vectors');
  }

  renderSquare() {
    console.log('Drawing Square as vectors');
  }

  renderTriangle() {
    console.log('Drawing Triangle as vectors');
  }
}

class RasterRenderer {
  renderCircle() {
    console.log('Drawing Circle as pixels');
  }

  renderSquare() {
    console.log('Drawing Square as pixels');
  }

  renderTriangle() {
    console.log('Drawing Triangle as pixels');
  }
}

module.exports = { VectorRenderer, RasterRenderer };
