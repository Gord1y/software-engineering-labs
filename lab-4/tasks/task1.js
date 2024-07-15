
const readline = require('readline');

class Handler {
  setNext(handler) {
    this.nextHandler = handler;
    return handler;
  }

  handle(request) {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    console.log('End of chain, no handler for the request.');
  }
}

class Level1Handler extends Handler {
  handle(request) {
    if (request === '1') {
      console.log('Level 1: Handling request.');
    } else {
      console.log('Level 1: Passing to the next handler.');
      return super.handle(request);
    }
  }
}

class Level2Handler extends Handler {
  handle(request) {
    if (request === '2') {
      console.log('Level 2: Handling request.');
    } else {
      console.log('Level 2: Passing to the next handler.');
      return super.handle(request);
    }
  }
}

class Level3Handler extends Handler {
  handle(request) {
    if (request === '3') {
      console.log('Level 3: Handling request.');
    } else {
      console.log('Level 3: Passing to the next handler.');
      return super.handle(request);
    }
  }
}

class Level4Handler extends Handler {
  handle(request) {
    if (request === '4') {
      console.log('Level 4: Handling request.');
    } else {
      console.log('Level 4: No handler found for the request.');
      return super.handle(request);
    }
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const level1 = new Level1Handler();
const level2 = new Level2Handler();
const level3 = new Level3Handler();
const level4 = new Level4Handler();

level1.setNext(level2).setNext(level3).setNext(level4);

const askQuestion = () => {
  rl.question('Enter the level of support needed (1-4): ', (answer) => {
    level1.handle(answer);
    askQuestion();
  });
};

askQuestion();
