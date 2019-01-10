const fs = require('fs');

var abs =  "/open/some/file.txt"
var rel = "file.txt"
fs.open(Buffer.from(rel), 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});