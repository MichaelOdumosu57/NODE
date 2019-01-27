const EventEmitter = require('events');
const ee = new EventEmitter();

// process.on('uncaughtException', function (err) {
//   console.log('this means bad syntax was allowed to run ruining low level memory');
// })

ee.on('error',()=>{
	console.log('handled safely')
})

setImmediate(() => {
  // This will crash the process because no 'error' event
  // handler has been added.
  ee.emit('error', new Error('This will crash'));
});

