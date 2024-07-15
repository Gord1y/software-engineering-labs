const Logger = require('./logger');
const FileWriter = require('./fileWriter');

class FileLoggerAdapter {
  constructor() {
    this.logger = new Logger();
    this.fileWriter = new FileWriter();
  }

  log(message) {
    this.fileWriter.writeLine('log.txt', message);
    this.logger.log(message);
  }

  error(message) {
    this.fileWriter.writeLine('log.txt', message);
    this.logger.error(message);
  }

  warn(message) {
    this.fileWriter.writeLine('log.txt', message);
    this.logger.warn(message);
  }
}

// Test the implementation
const fileLogger = new FileLoggerAdapter();
fileLogger.log('This is a log message');
fileLogger.error('This is an error message');
fileLogger.warn('This is a warning message');
