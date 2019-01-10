const fs = require('fs');

try {
  fs.unlinkSync('/tmpsadas/hesdllo');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  console.log("that dir doe exist", err.code)
}