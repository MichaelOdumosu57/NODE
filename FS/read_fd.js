const fs = require('fs')
const file = 'read_file.txt'
const mode = 'r'

fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


	      console.log("file opened")
        fs.readFile(fd, (err,data) => {


          if(err){

              // if readFile is using a fd the developer must close this upon error
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


              console.log("defualt:buffer",data,fd)
              fs.readFile(fd, {encoding: 'utf8'}, (err,data) => {


                  if(err){

                      // if readFile is using a fd the developer must close this upon error
                      fs.close(fd, (err) => {


                          if (err){


                              console.error(file,fd)
                              console.log("close me ")


                          }


                          else{

                              console.log(err)
                              console.log("file closed")


                         }


                      });            


                  }

                   
                  else{


                      console.log("string",data,fd) //nothing because the position starts where it 
                      // left off so you only want to use this after a fs.read or fs.write sets the position to 0
                      // file: FS/read.js uncomment the commentent code and comment of the uncomment fs.close code
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


              })      


          }  


        })        


    }	 



});

