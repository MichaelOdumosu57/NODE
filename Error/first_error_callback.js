const fs = require('fs');

function errorFirstCallback(err, data) {
  if (err) {
    console.error('There was an error', err.code);
    return;
  }
  console.log(data);
}

fs.readFile('/some/file/that/does-not-exist', errorFirstCallback);
fs.readFile('/some/file/that/does-exist', errorFirstCallback);
