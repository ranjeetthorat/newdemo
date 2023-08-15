if (window.Worker) {
    console.log("woker");
    var alarmworker;
    if(betafunction){
        alarmworker   = new Worker('alram.js');
    }
    
	const myWorker = new Worker("worker.js");
    let devkey=[];
    myWorker.postMessage([deviceids,ufrom,uto,jason,offset,finalarr,tinter,unixtimefrom,uninxtimeto,endoffset]);
    
  
    myWorker.onmessage = function(e) {

		console.log("data unfiltered recieved",e.data[5]);
        if(betafunction){
       constructLog(e.data[0],e.data[1]);
        }
        devkey = e.data[1];
        if(betafunction){
        alarmworker.postMessage([e.data[4],e.data[3],e.data[1]]);
        }


        if(graphType == 'paramwise'){
            separateparam(e.data[5],e.data[1],e.data[2])
        }
        
        /**
         * construct graph
         * e.dat[5] can be replace by e.data[0]
         */
         if(graphType == 'devicewise'){
        constructGraph(e.data[5],e.data[1],e.data[2]);
        //constructGraph2(e.data[0],e.data[1],e.data[2],e.data[4]);
         } 
        
	}
    
    const myWorker2 = new Worker("worker2.js");
    function separateparam(filtereddata,keyscoll,graphobj){
        myWorker2.postMessage([filtereddata,keyscoll,graphobj]);
    }
    try {
        myWorker2.onmessage = function(e){
            if(graphType == 'paramwise'){
                constructGraphD(e.data[0],e.data[1]);
              }  
        }
    } catch(e){
        console.error("worker2 cannot receive message",e);
    }
 
    
    try{
        alarmworker.onmessage =function(e){
            //alaramlogreport(e.data[0],devkey,e.data[1]);
        
        }
     
    } catch(e){
        console.error("alamram worker cannot receive message",e);
    }

}else{
    console.log('Your browser doesn\'t support web workers.')
  }  


 