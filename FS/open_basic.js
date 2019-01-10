const fs = require('fs')

fs.open('file.txt', 'r', (err, fd) => {
  if (err) throw err;
  else{
  		console.log("file opened")
  }
  fs.fstat(fd, (err, stat) => {
	    if (err) {
			    fs.close(fd, (err) => {
			      if (err) throw err;
			      else{
			      		console.log("file closed")
			      }			      
			    });    	
	    }
	    // use stat

	    // always close the file descriptor!
	    fs.close(fd, (err) => {
	      if (err) throw err;
	      else{
	      		console.log("file closed")
	      }
	    });
  });
});

