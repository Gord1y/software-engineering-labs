const LightTextNode = require('./elements/LightTextNode');
const TemplatedLightElementNode = require('./patterns/TemplateMethod');
const { DepthFirstIterator, BreadthFirstIterator } = require('./patterns/Iterator');
const { AddElementCommand, RemoveElementCommand } = require('./patterns/Command');
const { VisibleState, HiddenState, HighlightedState } = require('./patterns/State');
const { StyleVisitor, ClassListVisitor } = require('./patterns/Visitor');

// Create a root element
const root = new TemplatedLightElementNode('div');

// Template Method Test
const paragraph = new TemplatedLightElementNode('p');
const text = new LightTextNode('This is a paragraph.');
paragraph.addChild(text);
root.addChild(paragraph);

// Command Pattern Test
const addCommand = new AddElementCommand(root, new TemplatedLightElementNode('span'));
addCommand.execute();

// State Pattern Test
const visibleState = new VisibleState();
visibleState.apply(paragraph);

const hiddenState = new HiddenState();
hiddenState.apply(paragraph);

// Visitor Pattern Test
const styleVisitor = new StyleVisitor({ color: 'red' });
styleVisitor.visit(paragraph);

const classVisitor = new ClassListVisitor(['class1', 'class2']);
classVisitor.visit(paragraph);

// Iterator Pattern Test
const dfsIterator = new DepthFirstIterator(root);
let node;
while ((node = dfsIterator.next()) !== null) {
  console.log(node.tagName || node.text);
}

const bfsIterator = new BreadthFirstIterator(root);
while ((node = bfsIterator.next()) !== null) {
  console.log(node.tagName || node.text);
}
