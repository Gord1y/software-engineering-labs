# Dream HTML

This project implements an enhanced custom HTML framework using various design patterns including Template Method, Iterator, Command, State, and Visitor.

## Features

- **Template Method**: Lifecycle hooks for HTML elements.
- **Iterator**: Depth-first and breadth-first traversal of the HTML document.
- **Command**: Encapsulate actions as objects.
- **State**: Manage the different states of HTML elements.
- **Visitor**: Perform operations on elements without changing their classes.

## Directory Structure

dream-html/
├── package.json
├── .gitignore
├── README.md
├── index.js
├── elements/
│ ├── LightNode.js
│ ├── LightTextNode.js
│ └── LightElementNode.js
├── patterns/
│ ├── TemplateMethod.js
│ ├── Iterator.js
│ ├── Command.js
│ ├── State.js
│ └── Visitor.js
└── test/
├── testTemplateMethod.js
├── testIterator.js
├── testCommand.js
├── testState.js
└── testVisitor.js

## How to Run

1. Install dependencies:

   ```sh
   npm install
	 ```

2. Run the main script to test all patterns:

	```sh
	npm run start
	 ```
	 
3. Run specific test scripts for each pattern:
	
	```sh
	npm run test-template-method
	npm run test-iterator
	npm run test-command
	npm run test-state
	npm run test-visitor
	 ```