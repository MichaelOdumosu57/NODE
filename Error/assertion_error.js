const assert = require('assert');

// Generate an AssertionError to compare the error message later:
const { message } = new assert.AssertionError({
  actual: 1,
  expected: 2,
  operator: 'strictEqual'
});

// Verify error output:
try {
  assert.strictEqual(1, 3);
} 

catch (err) {
  console.log(err instanceof assert.AssertionError);
  console.log(err.message, message);
  console.log(err.name, 'AssertionError [ERR_ASSERTION]');
  console.log(err.actual, 1);
  console.log(err.expected, 2);
  console.log(err.code, 'ERR_ASSERTION');
  console.log(err.operator, 'strictEqual');
  console.log(err.generatedMessage, true);
}