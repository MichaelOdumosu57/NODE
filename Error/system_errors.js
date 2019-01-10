const net = require('net');
const connection = net.connect('localhost');
const fs = require('fs')
const assert = require('assert');


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(err) {
    console.log(this.readyState)
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("demo").innerHTML = this.responseText;
      console.log(   this.responseText   )
    }
    if(err){
      console.log(err.address)
    }
  };
  /////////////////////////////////////////////////////////////
  xhttp.open("PUT", "http://localhostsdsds:3000/book", true);
  xhttp.send(JSON.stringify({
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa": "b"
  }));
  ///////////////////////////////////////////////////////////
  
}



needed_file = "/daba/d/file.a"


    fs.open(needed_file, 'r', (err, fd) => {
        if (err){
            // throw err;
            console.log(err.path)
        } 

        else{
          console.log("file opened")
        }       
        try{
            null     
        }   
        catch (err){  
            console.log("c")
            fs.close(fd, (err) => {
                if (err){
                    throw err;
                } 

                else{
                  console.log("file closed")
                } 


            });   
        }           



    });
  


// Adding an 'error' event handler to a stream:
connection.on('error', (err) => {
    // If the connection is reset by the server, or if it can't
    // connect at all, or on any sort of error encountered by
    // the connection, the error will be sent here.
    console.error(err.address);
    console.error(err.code)
    console.log(err.port) 

});

connection.pipe(process.stdout);


