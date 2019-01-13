const EventEmitter = require('events');

class Emitter extends EventEmitter {}
class EmitterA extends EventEmitter {}


const EmitterB = new Emitter();
console.log(Emitter.defaultMaxListeners)
console.log(EmitterA.defaultMaxListeners)
console.log(EventEmitter.defaultMaxListeners)




console.log(EmitterB.getMaxListeners())
EmitterA.defaultMaxListeners = 3  //so even though you have a class extension, the  defaultMaxListeners for each are linked and all are chagned
// EventEmitter.defaultMaxListeners = 3

console.log(EmitterB.getMaxListeners())

console.log(Emitter.defaultMaxListeners)
console.log(EmitterA.defaultMaxListeners)
console.log(EventEmitter.defaultMaxListeners)

