const n_API = require(process.env.HOME+ "/Required/node_API_header.js").n_API_init({
  "p_uE":true,
  "p_bE":true,    
  "node_mode":true,
  "n_m_t":true,
  "n_m_t_r":true,
  "node_mode_threads":true,
  "circular_replacer":true,
  "required_dir":true,  
  "required_local_dir":true,  
  "async_listener":true,
  "a_l":true,    
},
{
  location_dir:__dirname
});
const p_uE                    =  n_API.API_n_c.API_process.p_uE
const p_bE                    =  n_API.API_n_c.API_process.p_bE
const node_mode               =  n_API.API_n_c.API_node_mode.node_mode 
const n_m_t_r                 =  n_API.API_n_c.API_node_mode.n_m_t_r 
const node_mode_threads       =  n_API.API_n_c.API_node_mode.node_mode_threads 
p_uE.message = 'an error with the process event emitter occured'
p_bE.message = 'async operations before I am ready to finish here'
p_bE.last.push(['simple_handler',{
                                    the_initer:0
                                  }])
p_bE.simple_handler = function(   dev_obj   ){
    console.log(   dev_obj.the_initer   )    
    debugger;
}
