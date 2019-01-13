const assert = require('assert').strict
const fs = require('fs')
const util = require('util');

const AsyncFunction = (async () => {}).constructor;

console.log(assert.ifError.toString()) 