const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, promise) => {
	console.log('Unhandled Rejection at:', promise, 'reason:', reason);
	unhandledRejections.set(promise, reason);
	// now that you have the rejected Promise hande it to emit the 'rejectedHandled event'
});
process.on('rejectionHandled', (promise) => {
  unhandledRejections.delete(promise);
});



// somePromise.then((res) => {
//   return reportToUser(JSON.pasre(res)); // note the typo (`pasre`)
// }); // no `.catch()` or `.then()`


function SomeResource() {
  // Initially set the loaded status to a rejected promise
  this.loaded = Promise.reject(new Error('Resource not yet loaded!'));
  // non-operational .catch(() => { }) handler may be attached to resource.loaded, to prevent 'unhandledRejection'
  // or figure out how to apply rejectionHandled
}

const resource = new SomeResource();
// no .catch or .then on resource.loaded for at least a turn