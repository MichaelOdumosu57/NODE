const fs = require('fs')
const file = 'async_read.txt'
const mode = 'r'





fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


	      console.log("file opened")

        let buf = Buffer.alloc(10000)
        pos = 0,offset = 30,
        len = 9000;
        console.log(buf)            
        fs.read(fd, buf, offset, len, pos,
            (err,bytes,buff) => {
            console.log('buff now how we get this to a string',buff)
            console.log(buff.toString())
            console.log('bytes read',bytes)
            buf = null
            buff = null  
            // to see how readFile just reads the rest of the file not the whole file uncomment here 
              // fs.readFile(fd, {encoding: 'utf8'}, (err,data) => {


              //     if(err){

              //         // if readFile is using a fd the developer must close this upon error
              //         fs.close(fd, (err) => {


              //             if (err){


              //                 console.error(file,fd)
              //                 console.log("close me ")


              //             }


              //             else{

              //                 console.log(err)
              //                 console.log("file closed")


              //            }


              //         });            


              //     }

                   
              //     else{


              //         console.log("string",data,fd) //nothing because the position starts where it left off so you only want to use this after a fs.read or fs.write sets the position to 0
              //         fs.close(fd, (err) => {


              //             if (err){


              //                 console.error(file,fd)
              //                 console.log("close me ")


              //             }


              //             else{


              //                 console.log("file closed")


              //            }


              //         });                      
                      


              //     }  


              // })                      
            fs.close(fd, (err) => {
                if (err){
                    throw err;
                } 

                else{


                    console.log("file closed hopefully memeory freed")


                } 


            });                     
        });           


    }	 



});


console.log("mem usage",process.memoryUsage())
