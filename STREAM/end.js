// write 'hello, ' and then end with 'world!'
const fs = require('fs');
const file = fs.createWriteStream('example.txt');
file.on('close',() => {
	console.log('steram and file is closed')
})

file.on('open',() => {
	console.log('steram and file is open')
})
file.write('hello, ');

file.end('world!', () => {
	console.log("no more writing allowed:)")
});



