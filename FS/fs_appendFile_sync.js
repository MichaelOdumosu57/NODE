const fs = require('fs')
const file = 'sample_no_fd_prob.txt'
const mode = 'a'
let fd;

try {
  fd = fs.openSync(file, mode);
  console.log("file openend")
  fs.appendFileSync(fd, 'data to append', 'utf8');
  console.log("data appened")
} 
catch (err) {
  /* Handle the error */
} 
finally {
  if (fd !== undefined)
    fs.closeSync(fd);
    console.log("file closed")
}
