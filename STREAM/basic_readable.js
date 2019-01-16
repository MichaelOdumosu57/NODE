const fs = require('fs')
const file = 'readable.txt'
const mode = 'r'
var r_response = '';

const A =function(chunk){
			setImmediate(() => {
				r_response += chunk
				console.log(r_response,this.readableLength)
			})	
		}


async function close_file(c_fd,r_s){

		// console.log(r_s)
		if(r_s != undefined){


			console.log(r_s.readableFlowing)


		}


		fs.close(c_fd,(c_err) =>{


			if(c_err){


				console.log(file,c_fd,c_err)
				console.log('close me')

			}


			else{


				
				console.log('if the stream wasnrt closed its closed now')



			}


		})	


}


fs.open(file,mode,(err,fd) =>{


	if(err){


		throw(err)


	}


	else{

		console.log('file opened')
		console.log(file,fd)
		const r_stream = fs.createReadStream(file,{
			fd:fd,	
			autoClose:false	
		})
		// r_stream.setEncoding('utf8')




		r_stream.on('data',A)

		var r_counter  = 0
		var r_monitor =setInterval(function(){

				if(r_stream.readableFlowing != undefined){


						if(!r_stream.readableFlowing){

							console.log
							r_stream.resume()


						}	


				}


				if(r_counter >= 100){


					console.log('this is taking too long I"ll attempt to close the stream')


					if(r_stream.isPaused()){


						r_stream.resume()


					}


					else{


						r_stream.close();
					

					}


				}


				if(r_couter >= 110){


					r_stream.push(null);
					r_stream.read(0);


				}
				


				if(r_counter >= 200){


					console.log('were forced to destroy the stream, they should make a method for ending streams')
					r_stream.destroy()


				}


				r_counter += 1



		},2000)


		r_stream.on('end',()=>{
			setImmediate(() => {
				console.log('nothing more to read closing this stream')
				clearInterval(r_monitor)
				console.log(r_response)
				r_stream.off('data',A)
				// r_stream.close();
				close_file(fd,r_stream)
			})
		})
		r_stream.on('error',(err)=>{
			setImmediate(() => {
				console.log('an error occured attempting to close the stream',err)
				clearInterval(r_monitor)
				close_file(fd,r_stream)
			})			
		})
		r_stream.on('close',()=>{
			setImmediate(() =>{
				console.log("looks like the fd was closed by the stream ")
			})
		})


	}

})