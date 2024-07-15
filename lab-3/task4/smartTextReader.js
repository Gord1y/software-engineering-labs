const fs = require('fs');

class SmartTextReader {
  read(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    return content.split('\n').map(line => line.split(''));
  }
}

class SmartTextReaderLogger {
  constructor(smartTextReader) {
    this.smartTextReader = smartTextReader;
  }

  read(filePath) {
    console.log(`Opening file: ${filePath}`);
    const content = this.smartTextReader.read(filePath);
    console.log('File read successfully');
    console.log(`Total lines: ${content.length}`);
    console.log(`Total characters: ${content.flat().length}`);
    return content;
  }
}

class SmartTextReaderLocker {
  constructor(smartTextReader, regex) {
    this.smartTextReader = smartTextReader;
    this.regex = regex;
  }

  read(filePath) {
    if (this.regex.test(filePath)) {
      console.log('Access denied!');
      return;
    }
    return this.smartTextReader.read(filePath);
  }
}

module.exports = { SmartTextReader, SmartTextReaderLogger, SmartTextReaderLocker };
