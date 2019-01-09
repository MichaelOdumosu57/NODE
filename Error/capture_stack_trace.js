const myObject = {};

Error.captureStackTrace(myObject);
console.log("im not throwing an error this is an example .stack property",myObject.stack);  // similar to `new Error().stack`


Error.captureStackTrace(myObject,(err) => {});
console.log("if I want to hide an error from you I would need a simple callback",myObject.stack); 

console.log("Error.stackTraceLimit",	Error.stackTraceLimit)
Error.stackTraceLimit = 1000
console.log("Error.stackTraceLimit",	Error.stackTraceLimit)

console.log("Error.code", Error.code)