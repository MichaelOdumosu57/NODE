const fs = require('fs')
const file = 'sample.txt'
const mode = 'a'

fs.open(file, mode, (err, fd) => {
    if (err) throw err;
    else{
        console.log("file opened",fd)
    }

    fs.appendFile(fd, 'data to append', (err) => {
        
        console.log(fd,"for append")
        if (err) {
            fs.close(fd, (err) => {
                if (err) throw err;
                else{
                        console.log("file closed with A",fd)
                }
            });
        }
        
        
        else{
            fs.close(fd, (err) => {
                if (err) throw new Error(fd);
                else{
                        console.log("file closed with C",fd)
                }
            });            
            console.log('The "data to append" was appended to file!');
            
        }
        
        
    });


    // console.log(fd,"for for async close")
    // fs.close(fd, (err) => {
    //     if (err) throw err;
    //     else{
    //             console.log("file closed with D",fd)
    //     }
    // });


});
