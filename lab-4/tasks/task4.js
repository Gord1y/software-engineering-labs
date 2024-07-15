const fs = require('fs');
const https = require('https');

class Image {
  constructor(strategy) {
    this.strategy = strategy;
  }

  display(url) {
    this.strategy.display(url);
  }
}

class FileSystemStrategy {
  display(filePath) {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
      console.log('Displaying image from file system:', data.toString('base64'));
    });
  }
}

class NetworkStrategy {
  display(url) {
    https.get(url, (response) => {
      let data = '';
      response.setEncoding('base64');
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        console.log('Displaying image from network:', data);
      });
    }).on('error', (err) => {
      console.error('Error fetching image:', err);
    });
  }
}

// Test the implementation
const fileStrategy = new FileSystemStrategy();
const networkStrategy = new NetworkStrategy();

const imageFromFile = new Image(fileStrategy);
const imageFromNetwork = new Image(networkStrategy);

imageFromFile.display('path/to/local/image.jpg'); // Change to a valid file path
imageFromNetwork.display('https://path/to/remote/image.jpg'); // Change to a valid URL
