const fs = require('fs')
const file = 'sample_no_fd_prob.txt'
const mode = 'a'

fs.open(file, mode, (err, fd) => {
    if (err) throw err;
    else{
	console.log("file opened")
    }	 
    fs.close(fd, (err) => {
        if (err) throw err;
	else{
		console.log("file closed")
	}
    });
    
 
});

try {
  fd = fs.openSync(file, mode);
  fs.appendFileSync(fd, 'data to append', 'utf8');
} 
catch (err) {
  /* Handle the error */
} 
finally {
  if (fd !== undefined)
    fs.closeSync(fd);
}
