const fs = require('fs')

try {
  fs.accessSync('./a.txt', fs.constants.F_OK | fs.constants.W_OK);
  console.log('can read/write');
}

 catch (err) {
  console.error('no access!');
}

