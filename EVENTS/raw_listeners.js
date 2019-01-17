const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));
// emitter.once('log', () => console.log('log twice'));
// console.log(emitter._events.log[1].listener.toString())
// to see the actual function you put there
console.log(emitter._events.log.listener.toString())


// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];  //comment and uncomment line below to see you dont event need to assign things
// var logFnWrapper
console.log("listeners",listeners)
// console.log("logFnWrapper",logFnWrapper)


// logs "log once" to the console and does not unbind the `once` event
// logFnWrapper != undefined ? logFnWrapper.listener() : listeners[0].listener()

// // logs "log once" to the console and removes the listener
logFnWrapper != undefined ? logFnWrapper(): listeners[0]()

emitter.emit('log');

emitter.on('log', () => console.log('log persistently'));
// will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');
console.log("newListeners",newListeners)
// logs "log persistently" twice
newListeners[0]();
emitter.emit('log');