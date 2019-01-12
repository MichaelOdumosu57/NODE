const fs = require('fs')
const file = 'fs_constants.txt'
const mode = 'a'

fs.open(file, mode, (err, fd) => {
    if (err) throw err;
    else{
	      console.log("file opened")
        var fs_constants = JSON.stringify(fs.constants)
        fs_constants = fs_constants.toString()
    }	 

    fs.appendFile(fd, fs_constants  , (err) => {
        

        if (err) {

            console.log(fd,"for error")
            fs.close(fd, (err) => {
                if (err) throw err;
                else{
                        console.log("file closed with A",fd)
                }
            });


        }
        
        
        else{


            console.log(fd,"for append")
            fs.close(fd, (err) => {
                if (err) throw new Error(fd);
                else{
                        console.log("file closed with C",fd)
                }
            });            
            console.log('The "data to append" was appended to file!');
            
        }
        
        
    });

 
});

// try {
//   fd = fs.openSync(file, mode);
//   fs.appendFileSync(fd, 'data to append', 'utf8');
// } 
// catch (err) {
//   /* Handle the error */
// } 
// finally {
//   if (fd !== undefined)
//     fs.closeSync(fd);
// }
