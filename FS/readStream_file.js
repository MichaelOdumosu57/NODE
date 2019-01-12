const fs = require('fs')
const file = 'sample_no_fd_prob.txt'
const mode = 'a'
const  stream = fs.createReadStream('sample.txt', { start: 90, end: 99 });

fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


        console.log("file opened")
        setTimeout(() => {
          stream.close(); 
        }, 100);
        console.log("stream")



    }  

    fs.close(fd, (err) => {
        if (err) throw err;


	      else{


	    	    console.log("file closed")


	     }


    });
});


