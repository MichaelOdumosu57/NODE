const fs = require('fs')


fs.unlink('/tmpaasdsads/hello', (err) => {
  	if (err){console.log("this method cannot remove dirs"	)}
  	else{
  		console.log('successfully deleted /tmp/hello');
  	}
});