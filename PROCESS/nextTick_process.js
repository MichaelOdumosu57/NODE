const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({  
  "fs":true    
},
{
  location_dir:__dirname
});
const fs       =  n_API.API_n_b_p.fs

console.log('start');
process.nextTick(() => {
  console.log('nextTick callback');
});
console.log('scheduled');


function definitelyAsync(arg, cb) {


  if (arg) {
  	console.log('i exist too')
    process.nextTick(cb);    
  }

  // the callback is just like another process.nextTick  so the call to fs.stat signals the end of the event loop
  fs.stat(__filename, ()=>{
  	console.log(arguments)  //refers to the calling function
  	console.log('ex third')
  });
}
async function a(){
	console.log('ex first')

}
// a()
// a()
process.nextTick(a)



definitelyAsync(1,function(a){ console.log('ex second')})


// function MyThing(options) {
//   this.setupOptions(options);

//   process.nextTick(() => {
//     this.startDoingStuff();
//   });
// }

// const thing = new MyThing();
// thing.getReadyForStuff();

// // thing.startDoingStuff() gets called now, not before.