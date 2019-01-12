const fs = require('fs')

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist. if reqcurisve is true else an error 
fs.mkdir('./apple/a/b/c/', { recursive: false }, (err) => {
  if (err) throw err;
});

