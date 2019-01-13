const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.on('removeListener', (event, listener) => {
	console.log('event removed',event,listener)
});	

myEmitter.once('newListener', (event, listener) => {

  
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
  }
  console.log(event,listener)
});
myEmitter.on('event', () => {
  console.log('A');
});
myEmitter.emit('event');

