const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  // process.nextTick(() = { one or the other 	
  setImmediate(() => {
    console.log('this happens asynchronously');
  });
});


myEmitter.emit('event', 'a', 'b');