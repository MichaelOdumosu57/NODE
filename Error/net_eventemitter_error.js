const net = require('net');
const connection = net.connect('localhost');

// Adding an 'error' event handler to a stream:
connection.on('error', (err) => {
	  // If the connection is reset by the server, or if it can't
	  // connect at all, or on any sort of error encountered by
	  // the connection, the error will be sent here.
	  console.error(err);
});

connection.pipe(process.stdout);
