// process.on('warning', (warning) => {
//   console.warn(warning.name);    // 'Warning'
//   console.warn(warning.message); // 'Something happened!'
//   console.warn(warning.code);    // 'MY_WARNING'
//   console.warn(warning.stack);   // Stack trace
//   console.warn(warning.detail);  // 'This is some additional information'
// });

process.emitWarning('Something happened!', {
  code: 'MY_WARNING',
  detail: 'This is some additional information',
  ctor:function(){}
});


// Emit a warning using a string and a type and a code
process.emitWarning('Something happened!', 'CustomWarning', 'WARN001');