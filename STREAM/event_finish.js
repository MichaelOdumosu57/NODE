const fs = require('fs')
var file = "./w.txt"
var mode = 'w'
var f_fd;// file descriotopor for thes teram error to close the file 

const A = function(err){
            setImmediate(() => {
               
                console.log('error thrown close this writestream ',err) 
                this.end()
                fs.close(f_fd, (err) => {


                    if (err){


                        console.error(file,fd)
                        console.log("close this write file me ")

                        
                    }


                    else{


                        console.log("file closed")


                   }


                });                 
            });  
}




fs.open(file,mode, (err,fd) => {

    f_fd = fd

    if(err){

        throw err

    }

    else{


        console.log('file opened',fd)
        const writer = fs.createWriteStream(file,{
              
              start:55,
              fd:fd,
              autoClose:false
              
              
              
        })
        writer.setDefaultEncoding('utf8')
        console.log('wriatbe stream created')
        writer.on('finish',()=>{
          setImmediate(() => {
              console.log('All writes are now complete. closing writeStream');
          });
        })

        writer.on('error', A);


        setImmediate(() => {
            console.log(writer.eventNames(),writer.encoding)
            for (let i = 0; i < 1; i++) {
                  writer.write(`hello, #${i}!\n`,() =>{
                      writer.end('This is the end\n');
                      // reallly this close method should be a callaback to writer.end, 
                      // which also is a listener to the finish event since .end triggers it 
                      fs.close(fd, (err) => {


                        if (err){


                            console.error(file,fd)
                            console.log("close me ")

                            
                        }


                        else{


                            console.log("file closed")
                                             


                       }


                      });                         
                  });
            }
            
        })

       

       

              
        


        

                
       


    }



 


})










