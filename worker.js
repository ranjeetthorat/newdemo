onmessage = function(e) {
    console.log('Message received from main script');
   const fina = e.data[3];
    let formData = new FormData();
    let unixstart = e.data[7];
    let unixend = e.data[8];
    formData.append('endoffset',e.data[9]);
    formData.append('deviceid',e.data[0]);
    formData.append('ufrom',e.data[1]);
    formData.append('uto',e.data[2]);
    formData.append('jason',e.data[3]);
    formData.append('offset',e.data[4]);
    formData.append('dvcsbmt','dvcsbmt');
    fetch("reportrest.php",{
        
            method: 'post',
            body: formData
    }).then(res => res.json())
    .then(data=>  sanitation(data))
    .then(data=>filtertime(e.data[6],data,e.data[5]))
    .catch(e=>console.log("worker thread data fetch error",e));

    function filtertime(interval,data,list){
      /**
       * create a list of devcie with no data present
       */
    
      dataPresentDevices =[];
      for(let i=0;i<list.length;i++){
         for(let j=0;j<data.length;j++){
             if(list[i][0]===data[j][0].devid){
               dataPresentDevices.push(list[i]);
             }
         }
      }

      
        const keyarray =[];
        
        for(let key=0;key<data.length;key++){
            
            keyarray[dataPresentDevices[key][0]]=[]; 
            //keyarray[list[key][0]].push('ad','asdsad');
      }
     
     //building perdevice/perparameter
      for(let d=0;d<data.length;d++){
        for(let k=1;k<=dataPresentDevices[d].length-1;k++){
            let pco=[];
            
        for(let j=0;j<data[d].length;j++){
            
                if(data[d][j].pcode === dataPresentDevices[d][k]){
                    pco.push(data[d][j])
    
    
                }
            }
           
            keyarray[data[d][0].devid].push(pco);
    
        }
    
      }
      //sorting on time
      const keyscoll = Object.keys(keyarray);
      for(let i=0;i<dataPresentDevices.length;i++){
        
        keyarray[dataPresentDevices[i][0]].forEach(item=>{
            
            
                item.sort((a,b)=>{
                    
                    let x=+a.utime;
                    let y=+b.utime;
                    return x-y;
                })
               
        
        });
      }
      
    
      console.log("keyarray sorted",keyarray);
     /**
      * creating filtered data of incremental values
      */
     
          let filterdata=[];
          let unfiltereddata=[];
        
          for(let z=0;z<keyscoll.length;z++){
                filterdata[keyscoll[z]]=[];
                unfiltereddata[keyscoll[z]]=[];
          }

          /**
           * hiding basic incremtns 
           */
         /* 
          for(let i=0;i<keyscoll.length;i++){
            
            
            
            
            for(let k=0;k<keyarray[keyscoll[i]].length;k++){
                filterdata[keyscoll[i]][k] =[]; 
                //console.log(keyarray[keyscoll[i]][k][0]);
                let unixtime = +keyarray[keyscoll[i]][k][0].utime;
                let increment;
                filterdata[keyscoll[i]][k].push(keyarray[keyscoll[i]][k][0]);
                let z=1;
                increment = (interval*60)+unixtime;
                while(z<keyarray[keyscoll[i]][k].length){
                  
                  let x= +keyarray[keyscoll[i]][k][z].utime;
                  
                  if(x>=increment){
                    filterdata[keyscoll[i]][k].push(keyarray[keyscoll[i]][k][z]);
                    unixtime = +keyarray[keyscoll[i]][k][z].utime;
                    increment = (interval*60)+unixtime;
                    z++;
                  } else{
                    z++;
                  }
    
                    
                }
            }
          }
          */
       
            // above block is alternative to below block 
            // see postmessage call
            // 

          /***
           * 
           * independent unit start
           * 
           * 
           */
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


          /**
           * independent unit end
           */

          /**
           * creating keyed collection of datapresent 
           */
        

          dataPresentKey =[];
          for(let i=0;i<dataPresentDevices.length;i++){
            dataPresentKey[dataPresentDevices[i][0]]=[];
              for(let j=1;j<=dataPresentDevices[i].length-1;j++){
                dataPresentKey[dataPresentDevices[i][0]].push(dataPresentDevices[i][j]);
              }
          }
          
          getPList(filterdata,keyscoll,dataPresentKey)
          .then(result=>{
            console.log("result is",result);
            return postMessage([filterdata,keyscoll,result,dataPresentKey,keyarray,unfiltereddata]);
            
          });
      }

     async function getPList(filterdata,keyscoll,dataPresentDevices){
        let namelist =[];
       
        try{
            for(let i=0;i<keyscoll.length;i++){
              namelist[keyscoll[i]]=[];
               let formData = new FormData();
              formData.append('uid',keyscoll[i]);
              formData.append('plist',dataPresentDevices[keyscoll[i]]);
              let response = await fetch("getparameter.php",{
                method: 'post',
                body: formData
               });
               let rdata = await response.json();
              
               namelist[keyscoll[i]].push(rdata)
             }
             return namelist;
            }  catch(e){
              console.log("error async",e)
            }
      }

      function sanitation(data){
          let cleanData = [];
          data.forEach(item=>{
            if(item.length){
              cleanData.push(item);
            }
          });
          
          return cleanData;



        

      }
      










/**
 * this will only separte required parameter
 * curretly server rendered
 
    function separate(data,fina){
           console.log(data);
        let filtereddata = data.filter((ele)=>{


                for(let i=0;i<fina.length;i++){
                        if(fina[i][0]===ele.devid){
                                if(fina[i].includes(ele.pcode))
                                return true;
                                return false;
                        }

                }
             
              
        });
        console.log(filtereddata);

    }
*/
   
   // postMessage(workerResult);
  }