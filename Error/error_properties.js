const err = new Error('The message');
console.error(err.message)
console.log(err.stack)
// Prints: The message

err.message = "message changed"
console.log(err.message )
console.log(err.stack)