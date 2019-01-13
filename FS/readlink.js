const fs = require('fs')

fs.readlink("./link_endpoint.pt", (err,linkString) =>{
	console.log(linkString)
})

