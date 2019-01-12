const fs = require('fs')
const file = 'truncate.txt'
const mode = 'a'
const assert = require('assert').strict;




async function a(err,fd){
  
  fs.close(fd, (err) => {


      if (err) throw err;


      else{


          console.log("file closed error during truncation?")


     }


  });

  // assert.ifError(err); 

}

fs.open(file, mode, (err, fd) => {
    if (err) throw err;


    else{


	      console.log("file opened")
        fs.ftruncate(fd, 4, (err) => {

            if(err){


                a(err,fd); //is this assert.ifError async or not


            }

            else{
                fs.close(fd, (err) => {
                    if (err) throw err;


                    else{


                        console.log("file closed and truncated")


                   }


                });
            }
            



        });  



    }	 



});

