const fs = require('fs')
const read_monitor = require('./read_monitor.js')
const async_listener = require('./async_listener.js')
const a_l = async_listener()
// const assert = require('assert')
const r_file = 'r.txt'
const r_mode = 'r'
const w_file = "w.txt"
const w_mode = 'w'
var ww_fd;
var rr_fd;
var r_response = '';
var r_monitor = null 
var r_interval = 40000
var r_counter  = 0

// r_e_r - readable_event_readable
const r_e_r = a_l(function(){
				  let r_e_r_chunk;
				  var r_e_r_size = 1000
				  // if no data event, it grabs everything and partials if the byte size does not divide well
				  // if data event has a listener after this it wont get any data
				  // same with after
				  var readable = arguments[1]  
				  while (null !== (chunk = readable.read(r_e_r_size))) {
				    	console.log(`Received ${chunk.length} bytes of data.\n this is from the 'readable' event - read() implementation`);
				  }
})


const reading_file = a_l(function(){				
				console.log('if the readable event was off as the remaining data event you see me a lot or if it was on you see me little for the api')
				console.log(arguments.length)
				// console.log(arguments[0])
				console.log(arguments[1].readableLength)
				console.log(arguments[1].readableBuffer)				
})




async function close_file(c_fd,c_name =undefined,r_w = undefined){

		console.log(r_w)


		if(   r_monitor != null   ){


			clearInterval(r_monitor)
			r_monitor = null
			console.log('interval cleared')


		}


		fs.close(c_fd,(c_err) =>{


			if(c_err){


				console.log(r_w ,c_fd,c_err)
				console.log('close me or someone else closed me check the errors, you should see a lot of me ')

			}


			else if(c_name != undefined){


				console.log(r_w,c_name)
				console.log('if itclosed the file '+ c_name +' is closed now')



			}


			else{


				console.log(r_w ,c_fd,c_err)
				console.log('item closed')

			}


		})	


}


const B = function(err){
            setImmediate(() => {               
                console.log('error thrown in writeStream close everything ',err) 
                this.emit('error')
                this.end()
                console.log(this)
                close_file(rr_fd,'read_file',this)
                close_file(ww_fd,'write_file',this)              
            });  
}

const C = function(err){
            setImmediate(() => {               
                console.log('error thrown in readStream close everything ',err) 
                this.emit('error')
                this.close()
				this.push(null);
				this.read(0);                
                console.log(this)
                close_file(rr_fd,'read_file',this)
                close_file(ww_fd,'write_file',this)              
            });  
}


fs.open(r_file,r_mode,(r_err,r_fd) =>{


	if(r_err){


		throw(r_err)


	}


	else{


		rr_fd = r_fd;
		console.log("read file opened")
		const r_stream = fs.createReadStream(r_file,{
			start:126,
			end:2237,
			fd:rr_fd,	
			autoClose:false	
		})
		r_stream.on('error', C);
		// r_stream.on('readable', r_e_r ); 
		// before the data event there  is also nothing to read	
		r_stream.on('data',reading_file)
		r_stream.on('end',()=>{
			setImmediate(() => {
				console.log('nothing more to read closing  readstream')
				// console.log(r_response)
				close_file(rr_fd,'read_file',r_file)
			})
		})			
		r_stream.on('readable', r_e_r ); 
		// after the data event it emits but there is nothing for it to read				
		r_stream.on('close',()=>{
			setImmediate(() =>{
				console.log("looks like the fd was closed by the stream ")
			})
		})									
		r_monitor = read_monitor(r_stream,r_counter,r_interval)
		console.log('readable stream intializaed')


					
	}


})
