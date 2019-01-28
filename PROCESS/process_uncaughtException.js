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
const circular_replacer       =  n_API.API_n_c.circular_replacer

// process_uncaughtException.message
    //message to for dev to tell self when the process completes everything
//  process_uncaughtException.open_items 
    // the open items that the API needs to have a method to close
// process_uncaughtException.handler
        //the  uncaughtException handler that uses the provided function to close the objects, it should be considered whether defaults are applied
        // in case the developer forgets to write a close method for it
            // the dev must write a function and assoicate the name of the type to the object they are trying to close
            // if slighty different operations are needed use a node_mode emitter, provide slighty differnent name
                // future implementations will decide what the developer wants to do here but to coventinonal js if your rewrite a function on the same
                // object propety you can bypass the problem and use the same name for different specifics of closing the same object type

// push the opened object and the type to be proerly closed object
// how you use it is that the closing function is added as a method to the object and as it goes through open items its has a type, 
    // the type name is the name of the function to close the open object
// the client using this plugin should create the object for the end function to receive
// make a check if the dev tries to register a fuction open object type twice 
    // tell dev they cannot do this and this plugin will use the last extension if they want to be innovative so they can apply different rules 
    // to different objects

var process_uncaughtException = {}
process_uncaughtException.message = ''
process_uncaughtException.open_items = []
process_uncaughtException.handler = function(   dev_obj   ){
    open_items  =  dev_obj.open_items               
    process.on('exit',(code) =>{
        console.log(   process_uncaughtException.message,code   )    
        Error.stack != undefined ? console.log(Error.stack) : console.log('trying to show you the error')
    })    
    for (var open_items_i = open_items.length - 1; open_items_i >= 0; open_items_i--) {
        // console.log(open_items[open_items_i][1])

        if(   process_uncaughtException[open_items[open_items_i][0]]!= undefined   ){


            process_uncaughtException[open_items[open_items_i][0]](   open_items[open_items_i][1]   )


        }    


        else{


            console.log(   'the open object assoicated with' + open_items[open_items_i][1]   + ' a ' + open_items[open_items_i][0] + 'was left open, \
                close this yourself, to \
                avoid this in the future register the open object type as the function name to this object and it must be exact ')


        }      


    }
    dev_obj.exit_callback() 
}       

process.on('uncaughtException',(err)=>{
    console.error(   err   )
    process_uncaughtException.handler({
                                        open_items: process_uncaughtException.open_items,
                                        exit_callback: function(){process.exit()}
                                      })
})


module.exports = process_uncaughtException
