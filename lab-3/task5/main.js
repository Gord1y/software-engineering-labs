const { LightTextNode, LightElementNode } = require('./lightHTML');

const paragraph = new LightElementNode('p');
const text = new LightTextNode('This is a paragraph.');
paragraph.addChild(text);

const div = new LightElementNode('div');
div.addClass('container');
div.addChild(paragraph);

console.log(div.getOuterHTML());
