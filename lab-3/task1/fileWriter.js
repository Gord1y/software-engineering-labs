const fs = require('fs');

class FileWriter {
  write(filePath, content) {
    fs.writeFileSync(filePath, content);
  }

  writeLine(filePath, content) {
    fs.writeFileSync(filePath, content + '\n', { flag: 'a' });
  }
}

module.exports = FileWriter;
