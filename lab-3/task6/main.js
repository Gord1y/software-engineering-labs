const { LightTextNode, FlyweightFactory } = require('./lightHTML');

const factory = new FlyweightFactory();

const h1 = factory.getFlyweight('h1');
const h2 = factory.getFlyweight('h2');
const p = factory.getFlyweight('p');
const blockquote = factory.getFlyweight('blockquote');

const textH1 = new LightTextNode('Title of the book');
h1.addChild(textH1);

const textH2 = new LightTextNode('Chapter 1');
h2.addChild(textH2);

const textP = new LightTextNode('This is a paragraph.');
p.addChild(textP);

const textBlockquote = new LightTextNode('This is a quote.');
blockquote.addChild(textBlockquote);

console.log(h1.getOuterHTML());
console.log(h2.getOuterHTML());
console.log(p.getOuterHTML());
console.log(blockquote.getOuterHTML());
