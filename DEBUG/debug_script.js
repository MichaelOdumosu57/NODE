const simple = require('./simple_module.js')        
        
		global.basic_debug_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx = 5		
		basic_debug_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx += 2
		debugger;
        function wait(   ms   ){
           var start = new Date().getTime();
           var end = start;
           while(   end < start + ms   ) {
             end = new Date().getTime();
           }
           console.log(start,end)
        }
        debugger;
        wait(2000)