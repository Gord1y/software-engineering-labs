const { SmartTextReader, SmartTextReaderLogger, SmartTextReaderLocker } = require('./smartTextReader');

const smartTextReader = new SmartTextReader();
const logger = new SmartTextReaderLogger(smartTextReader);
const locker = new SmartTextReaderLocker(smartTextReader, /restricted\.txt$/);

// Use logger to read file
logger.read('test.txt');

// Use locker to read file
locker.read('restricted.txt');
locker.read('test.txt');
