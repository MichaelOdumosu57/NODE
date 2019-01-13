const fs = require('fs')



fs.readdir("./" , (err,files) => {	
	if (err) throw err


	else{


		console.log(files)
		fs.readdir("./" ,{encoding:'buffer'} ,(err,files) => {	
			if (err) throw err


			else{


				console.log(files)
				fs.readdir("./" ,{withFileTypes:true} ,(err,files) => {	
					if (err) throw err


					else{


						console.log(files)


					}
				})		



			}
		})		


	}
})