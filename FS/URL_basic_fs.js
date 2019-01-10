const fs = require('fs');
const fileUrl = new URL('file:///tmsadasfasfasp/helsdasdalo');

try{
	fs.readFileSync(fileUrl);
}

catch(   err   ){
	console.log("no fs , but I made the URL object")
	console.log(fileUrl)
}