const fs_module = require('fs')


var w_file = "./w.txt"
var w_mode = 'w'
var data = 'gaba gaba' 

const A = () =>{
            setImmediate(() => {
               
                console.log('stream closed by error') 
                fs_module.close(w_fd, (w_err) => {


                    if (w_err){


                        console.error(w_file,w_fd)
                        console.log("close me ")

                        
                    }


                    else{


                        console.log("file closed")


                   }


                });                 
            });  
}

async function writeOneMillionTimes(writer, data, callback) {
  let i = 10000;
  writing();
  function writing() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        // console.log(writer.bytesWritten)
        ok = writer.write(data);
      }
    } while (i > 0 && ok);


    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      // console.log(i)
      writer.once('drain', writing);
    }
  }
}


fs_module.open(w_file,w_mode, (w_err,w_fd) => {


    if(w_err){

        throw err

    }

    else{


        console.log('file opened',w_fd)
        const fs = fs_module.createWriteStream(w_file,{
              
              start:55,
              fd:w_fd,
              autoClose:false
              
              
              
        })
        fs.setDefaultEncoding('utf8')
        console.log('wriatbe stream created')
        fs.on('finish',()=>{
          setImmediate(() => {
              console.log('stream closed by finish ')
          });
        })

        fs.on('error', A );


        console.log(fs.eventNames(),fs.encoding)
          setImmediate(() => {
              writeOneMillionTimes(fs,data,() => {
                console.log("let look at the big file get rid of it immeditealy, its taking up a megabyte")
                
                fs_module.close(w_fd, (w_err) => {


                  if (w_err){


                      console.error(w_file,w_fd)
                      console.log("close me ")

                      
                  }


                  else{


                      console.log("file closed")
                      fs.end()
                      fs.off('error',A)
                      fs.on('error',(err) =>{
                          setImmediate(() => {
                             
                              console.log(err)
                              
                              console.log('stream closed by error') 
                          });
                      });                   
                      // fs.write("one more things")


                 }


                });            
              }); 
              
          });        

        // fs.end()
        // fs_module.close(w_fd, (w_err) => {


        //   if (w_err){


        //       console.error(w_file,w_fd)
        //       console.log("close me ")

              
        //   }


        //   else{


        //       console.log("file closed")
        //       fs.off('error',A)
        //       fs.on('error',(err) =>{
        //           setImmediate(() => {
                     
        //               console.log(err)
                      
        //               console.log('stream closed by error') 
        //           });
        //       });                   


        //  }


        // });        

        

                
       


    }

 


})










