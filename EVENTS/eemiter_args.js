const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', function(a, b) {
  console.log(a, b, this, this === myEmitter ,myEmitter === myEmitter);
  // Prints:
  //   a b MyEmitter {
  //     domain: null,
  //     _events: { event: [Function] },
  //     _eventsCount: 1,
  //     _maxListeners: undefined } true
});
// myEmitter.emit('event', 'a', 'b');


const myEmitter_i = new MyEmitter();
myEmitter_i.on('event', (a, b) => {
  console.log(a, b, this);
  // Prints: a b {}
});
myEmitter_i.emit('event', 'a', 'b');