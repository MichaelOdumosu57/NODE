const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('removeListener', (event, listener) => {
	console.log('event removed',event)
});	


emitter.on('a', () => {})
emitter.on('b', () => {})
emitter.on('e', () => {})
emitter.on('f', () => {})

emitter.on('f', () => {})
emitter.on('f', () => {})

emitter.on('f', () => { console.log('f.a')})
emitter.on('f', () => {console.log('f.b')})

const sym = Symbol('symbol');
emitter.on(sym, () => {});


console.log(emitter.eventNames()) // does not repeat events with different listeners 
console.log(emitter.getMaxListeners())
console.log(emitter.listenerCount('f'))
console.log(emitter.listeners('f'))