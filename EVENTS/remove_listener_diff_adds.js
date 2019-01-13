const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.once('ping', pong);
ee.on('ping', pong);
ee.removeListener('ping', pong); // it removes the last one all the time 

ee.emit('ping');
ee.emit('ping');