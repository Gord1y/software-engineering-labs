const TemplatedLightElementNode = require('../patterns/TemplateMethod');
const { AddElementCommand, RemoveElementCommand } = require('../patterns/Command');

const root = new TemplatedLightElementNode('div');
const span = new TemplatedLightElementNode('span');

const addCommand = new AddElementCommand(root, span);
addCommand.execute();
console.log('After adding span:', root.getOuterHTML());

const removeCommand = new RemoveElementCommand(root, span);
removeCommand.execute();
console.log('After removing span:', root.getOuterHTML());
