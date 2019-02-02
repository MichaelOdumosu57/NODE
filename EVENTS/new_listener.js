const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.on('removeListener', (event, listener) => {
	console.log('event removed',event,listener)
});	

myEmitter.once('newListener', (event, listener) => {

  debugger;
  if (event === 'event') {
    // Insert a new listener in front
    myEmitter.on('event', () => {
      console.log('B');
    });
    setImmediate(() =>{

        myEmitter.off(event,listener)
    })
  }
  console.log(event,listener)
});
myEmitter.on('event', () => {
  console.log('A');
});
debugger;
myEmitter.emit('event');

