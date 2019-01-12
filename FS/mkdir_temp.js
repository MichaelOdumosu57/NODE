const fs = require('fs')
const os = require('os')

// The parent directory for the new temporary directory
const tmpDir = os.tmpdir();
const { sep } = require('path');



fs.mkdtemp(`${tmpDir}${sep}`, (err, folder) => {
  if (err) throw err;
  console.log(folder);
  // Will print something similar to `/tmp/abc123`.
  // A new temporary directory is created within
  // the /tmp directory.
});