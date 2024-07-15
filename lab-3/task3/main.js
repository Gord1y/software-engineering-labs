const { Circle, Square, Triangle } = require('./shapes');
const { VectorRenderer, RasterRenderer } = require('./renderers');

const vectorRenderer = new VectorRenderer();
const rasterRenderer = new RasterRenderer();

const circle = new Circle(vectorRenderer);
const square = new Square(rasterRenderer);
const triangle = new Triangle(vectorRenderer);

circle.draw();
square.draw();
triangle.draw();
