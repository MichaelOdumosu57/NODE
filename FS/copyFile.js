const fs = require('fs')
const file = 'copy_async_src.txt'
const mode = 'a'

fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


	      console.log("file opened")


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
                        // destination.txt will be created or overwritten by default.
                        fs.copyFile('copy_async_src.txt', 'copy_async_dest.txt', (err) => {


                            if (err){


                                console.log("error",err)
 

                            }


                          else{


                              console.log('source.txt was copied to destination.txt',err);



                          }    


                        });                            
                }


            });           
       
            console.log('The "data to append" was appended to file!');
            

        }
        
        



    });



});

// try {
//   fd = fs.openSync(file, mode);
// } 
// catch (err) {
  /* Handle the error */
// } 
// finally {
//   if (fd !== undefined)
//     fs.closeSync(fd);
// }
