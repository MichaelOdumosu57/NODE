const fs = require('fs')
const file = 'read_file.txt'
const mode = 'a'

fs.readFile(file, (err,data) => {
  if(err) throw ("closing it for you")

   
  else{


      console.log("defualt:buffer",data)
      fs.readFile(file, {encoding: 'utf8'}, (err,data) => {
        if(err) throw ("closing it for you")

         
        else{


            console.log(data)
            


        }  
      })      


  }  
})
