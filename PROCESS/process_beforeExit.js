const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({  
  "node_mode":true,
  "n_m_t":true,
  "n_m_t_r":true,
  "node_mode_threads":true,
  "circular_replacer":true,
  "required_local_dir":true,
  "async_listener":true,
  "a_l":true,    
},
{
  location_dir:__dirname
});
//same functionality as process_uncaughtException however it can be used to scheule additional work 
const circular_replacer       =  n_API.API_n_c.circular_replacer
var process_beforeExit = {}
process_beforeExit.last = []
process_beforeExit.message = ''
process_beforeExit.handler = function(   dev_obj   ){                
    for (var p_bE_0_i = dev_obj.last.length - 1; p_bE_0_i >= 0; p_bE_0_i--) {
        // console.log(open_items[open_items_i][1])

        if(   process_beforeExit[dev_obj.last[p_bE_0_i][0]]!= undefined   ){


            process_beforeExit[dev_obj.last[p_bE_0_i][0]](   dev_obj.last[p_bE_0_i][1]   )


        }    


        else{


            console.log(   'the open object assoicated with' + dev_obj.last[p_bE_0_i][1]   + ' a ' + dev_obj.last[p_bE_0_i][0] + 'was left open, \
                close this yourself, to \
                avoid this in the future register the open object type as the function name to this object and it must be exact ')


        }      


    }
    process.exit() 
}       
process.on('beforeExit',(code)=>{
    console.group(   "process_beforeExit"   )
        console.log(   code   )
        console.log(   process_beforeExit.message   )
        process_beforeExit.handler({
                                    last:process_beforeExit.last
                                  })
    console.groupEnd()

})


module.exports = process_beforeExit
