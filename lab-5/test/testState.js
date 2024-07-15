const TemplatedLightElementNode = require('../patterns/TemplateMethod');
const { VisibleState, HiddenState, HighlightedState } = require('../patterns/State');

const paragraph = new TemplatedLightElementNode('p');

const visibleState = new VisibleState();
visibleState.apply(paragraph);

const hiddenState = new HiddenState();
hiddenState.apply(paragraph);

const highlightedState = new HighlightedState();
highlightedState.apply(paragraph);
