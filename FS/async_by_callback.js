const fs = require('fs')

fs.rename('/tmpsada/hesadsllo', '/tmpsada/wosadrld', (err) => {
  if (err) throw err;
  fs.stat('/tasdamp/worldsdadsa', (err, stats) => {
    if (err) throw err;
    console.log(`stats: ${JSON.stringify(stats)}`);
  });
});