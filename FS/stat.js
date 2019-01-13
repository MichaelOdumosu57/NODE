const fs = require('fs')

fs.stat("./async_read.txt", (err,stat_obj) =>{
	if (err) throw err;


	else{


		console.log(stat_obj)

		
	}
})