const fs = require('fs')

var a =fs.watch('./file.txt', { encoding: 'buffer' }, (eventType, filename) => {
  if (filename) {
    console.log(filename);
    // Prints: <Buffer ...>
  }
});

a.close()

