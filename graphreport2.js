
for(let i=0;i<keyscoll.length;i++){
            
            
            
            
    for(let k=0;k<keyarray[keyscoll[i]].length;k++){
        unfiltereddata[keyscoll[i]][k] =[]; 
        //console.log(keyarray[keyscoll[i]][k][0]);
        
        //unfiltereddata[keyscoll[i]][k].push(keyarray[keyscoll[i]][k][0]);
        let z=0;
        increment = unixstart;
        while(increment <= unixend){

            let unixtime1 = increment;
            let range = unixtime1+59;

            let found = keyarray[keyscoll[i]][k]
            .find(element =>( ( (+element.utime) >= unixtime1) && ( (+element.utime) <= range) ) );
            if(found){
                unfiltereddata[keyscoll[i]][k].push(found);
            }
            increment = (interval*60)+unixtime1;
  
            
        }
    }
  }