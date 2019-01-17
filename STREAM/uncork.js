

const fs = require('fs')
var file = "./w.txt"
var mode = 'w'
var f_fd;// file descriotopor for thes teram error to close the file 
var data = "foo_bar"
const A = function(err){
            setImmediate(() => {
               
                console.log('error thrown close this stream ',err) 
                this.end()
                fs.close(f_fd, (err) => {


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




fs.open(file,mode, (err,fd) => {

    f_fd = fd

    if(err){

        throw err

    }

    else{


        console.log('file opened',fd)
        const writer = fs.createWriteStream(file,{
              
              start:51,
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
              writer.cork();
              writer.write('don"t close yet')
              writer.cork();
              writer.write('lets see how we uncork')
      				process.nextTick(() => {
      				  	console.log(writer.writableHighWaterMark, writer.bytesWritten,writer.writableBuffer)	
      				  	writer.uncork();
      				  	console.log(writer.writableHighWaterMark, writer.bytesWritten,writer.writableBuffer)	
      				  	// The data will not be flushed until uncork() is called a second time.
      				  	writer.uncork();
      				  	console.log(writer.writableHighWaterMark, writer.bytesWritten)
      				});


  		      writer.write(`hello, #${data}!\n`,() =>{
  		      	  console.log(writer.writableHighWaterMark, writer.bytesWritten)	
  		          writer.end('This is the end\n');
  		          console.log(writer.writableHighWaterMark, writer.bytesWritten,writer.writableBuffer)
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

            
        })

       

       

              
        


        

                
       


    }



 


})










