const fs = require('fs')


fs.realpath("./link_endpoint.pt", (err,resPath) =>{
// fs.realpath.native("./link_endpoint.pt", (err,resPath) =>{	
	if (err) throw err

	
	else{


		console.log(resPath)


	}	
}) 