const TemplatedLightElementNode = require('../patterns/TemplateMethod');
const LightTextNode = require('../elements/LightTextNode');

const paragraph = new TemplatedLightElementNode('p');
const text = new LightTextNode('This is a paragraph.');
paragraph.addChild(text);

console.log(paragraph.getOuterHTML());
