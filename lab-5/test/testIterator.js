const TemplatedLightElementNode = require('../patterns/TemplateMethod');
const LightTextNode = require('../elements/LightTextNode');
const { DepthFirstIterator, BreadthFirstIterator } = require('../patterns/Iterator');

const root = new TemplatedLightElementNode('div');
const paragraph = new TemplatedLightElementNode('p');
const text = new LightTextNode('This is a paragraph.');
paragraph.addChild(text);
root.addChild(paragraph);

const dfsIterator = new DepthFirstIterator(root);
let node;
console.log('Depth-First Traversal:');
while ((node = dfsIterator.next()) !== null) {
  console.log(node.tagName || node.text);
}

const bfsIterator = new BreadthFirstIterator(root);
console.log('Breadth-First Traversal:');
while ((node = bfsIterator.next()) !== null) {
  console.log(node.tagName || node.text);
}
