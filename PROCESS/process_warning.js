const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({
  "events":true,            
  "required_local_dir":true,        
},
{
  location_dir:__dirname
});
// const events = n_API.API_n_b_p.events
n_API.API_n_b_p.events.defaultMaxListeners = 2;
process.on('foo', () => {});
process.on('foo', () => {});
process.on('foo', () => {});
process.on('warning', (   dev_ops   ) => {
  // var dev_ops = arguments[0]	
  console.warn(   dev_ops   );    // Print the warning   
  console.warn(   arguments   )
});