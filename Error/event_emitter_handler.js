const EventEmitter = require('events');
const ee = new EventEmitter();

mmediate(() => {
  // This will crash the process because no 'error' event
  // handler has been added.
  ee.emit('error', new Error('This will crash'));
});

