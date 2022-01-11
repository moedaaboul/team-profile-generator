const fs = require('fs');

const writeToFile = (fileName, data) => {
  try {
    fs.writeFileSync(fileName, data);
  } catch (error) {
    console.log(`[ERROR]: Failed to write to file | ${error.message}`);
  }
};

module.exports = writeToFile;
