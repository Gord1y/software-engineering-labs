const Virus = require('./virus');

const parentVirus = new Virus('ParentVirus', 100, 2, 'TypeA');
const childVirus1 = new Virus('ChildVirus1', 50, 1, 'TypeB');
const childVirus2 = new Virus('ChildVirus2', 30, 1, 'TypeC');

parentVirus.addChild(childVirus1);
parentVirus.addChild(childVirus2);

const clonedVirus = parentVirus.clone();

console.log('Original Virus:', parentVirus.getDescription());
console.log('Cloned Virus:', clonedVirus.getDescription());
