const fs = require('fs')
const symlink = './link_endpoint.pt'
const target = './apple/link_endpoint.pt' // make sure this exists I dont have time for everything lol 
// and go on to delete the file if you feel 
fs.realpath(symlink, (err,ressymlink) => {


	if(err){

		fs.symlink(target, symlink, (err) =>{
				fs.unlink(symlink, (err) => {
				  if (err) throw err;
				  console.log('symlink err was deleted');
				});			
		})

	}


	else{


		fs.unlink(symlink, (err) => {
		  if (err) throw err;


		  else{


		  		console.log('symlink was deleted');


		  }


		});


	}

})

