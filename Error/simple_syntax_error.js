try {
  require('vm').runInThisContext('binary ! isNotOk');
} catch (err) {
  // err will be a SyntaxError
  console.log(err)
}

console.log("continue along, no sync please lol")