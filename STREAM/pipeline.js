const { pipeline } = require('stream');
const fs = require('fs');


// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:
// p_l_stream array containg every stream used in the pipeline

;


module.exports = function(){
            return function(...p_l_stream){  
              //using p_l_stream like that works!
                    pipeline(
                      p_l_stream,
                      (err) => {
                        if (err) {
                          console.error('Pipeline failed', err);
                        } else {
                          console.log('Pipeline succeeded');
                        }
                      }
                    );
               }
                           
}
