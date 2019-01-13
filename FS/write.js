const fs = require('fs')
const file = 'writes.txt'
const string_file = 'string_write.txt'
const mode = 'w'
var data = "write me to a file, make sure the buffer is big enough for me "

fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


	      console.log("file opened",fd)
        let buf = Buffer.from(data)
        var off = 22
        var pos = 32 
        var len = data.length - 40

        fs.write(fd,buf,off,len,pos,
          (err,byteW,buff) =>{


              if(err){


                  fs.close(fd, (err) => {


                      if (err){


                          console.error(file,fd)
                          console.log("close me ")

                          
                      }


                      else{


                          console.log("file closed")


                     }


                  });  


              }


              else{


                  console.log("bytes written ",byteW)
                  console.log("you get utf8 ")  
                  fs.close(fd, (err) => {


                      if (err){


                          console.error(file,fd)
                          console.log("close me ")

                          
                      }


                      else{

                          buf = null
                          buff = null
                          console.log("file closed")


                     }


                  });    


              }


          })


    }	 


    fs.close(fd, (err) => {


        if (err){


            console.error(file,fd)
            console.log("close me ")

            
        }


        else{

            console.error(file,fd)
            console.log("file closed")


       }


    });     




});


fs.open(string_file, mode, (err, fd) => {
    if (err) throw err;


    else{


        console.log("file opened",fd)

        var pos = 22
        fs.write(fd,data,pos,'utf8',
          (err,charW,stringss) =>{


              if(err){


                  fs.close(fd, (err) => {


                      if (err){


                          console.error(file,fd)
                          console.log("close me ")

                          
                      }


                      else{


                          console.log("file closed")


                     }


                  });  


              }


              else{


                  console.log("chars written ",charW)
                  console.log("open the file to see what you got bytes or utf8")  
                  fs.close(fd, (err) => {


                      if (err){


                          console.error(file,fd)
                          console.log("close me ")

                          
                      }


                      else{


                          console.log("file closed")


                     }


                  });    


              }

              fs.close(fd, (err) => {


                  if (err){


                      console.error(file,fd)
                      console.log("close me ")

                      
                  }


                  else{

                      console.error(file,fd)
                      console.log("file closed")


                 }


              });               


          })


    }  




});

console.log("mem usage",process.memoryUsage())