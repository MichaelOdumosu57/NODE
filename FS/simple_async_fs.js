const fs = require('fs')


fs.unlink('/tmpaasdsads/hello', (err) => {
  	if (err){console.log("no dir"	)};
  	else{
  		console.log('successfully deleted /tmp/hello');
  	}
});