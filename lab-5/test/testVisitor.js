const TemplatedLightElementNode = require('../patterns/TemplateMethod');
const { StyleVisitor, ClassListVisitor } = require('../patterns/Visitor');

const paragraph = new TemplatedLightElementNode('p');

const styleVisitor = new StyleVisitor({ color: 'blue' });
styleVisitor.visit(paragraph);

const classVisitor = new ClassListVisitor(['class1', 'class2']);
classVisitor.visit(paragraph);

console.log(paragraph.getOuterHTML());
