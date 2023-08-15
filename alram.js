onmessage = function(e){
   const originalData = e.data[0];
   const dataPresentDevices = e.data[1];
   const keyscoll = e.data[2];


   getMaxMin(originalData,keyscoll,dataPresentDevices)
   .then(result=>{
     console.log("maxminobj",result);
     removevalue(result);
    // return postMessage([filterdata,keyscoll,result,dataPresentKey,keyarray]);
     
   });

   async function getMaxMin(originalData,keyscoll,dataPresentDevices){
    let namelist =[];
    try{
        for(let i=0;i<keyscoll.length;i++){
          namelist[keyscoll[i]]=[];
           let formData = new FormData();
          formData.append('uid',keyscoll[i]);
          formData.append('plist',dataPresentDevices[keyscoll[i]]);
          let response = await fetch("getoutvalues.php",{
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

  let alarmLog = []
  function removevalue(outval){
    for(let i=0;i<keyscoll.length;i++){
        alarmLog[keyscoll[i]]=[];
        for(let j=0;j<originalData[keyscoll[i]].length;j++){
            alarmLog[keyscoll[i]][j]=[];
                for(let k=0;k<originalData[keyscoll[i]][j].length;k++){
                    let dvalue = +originalData[keyscoll[i]][j][k].value;
                    let max = +outval[keyscoll[i]][0][j].max;
                    let min = +outval[keyscoll[i]][0][j].min;
                    if(dvalue <= min || dvalue >=max){
                        alarmLog[keyscoll[i]][j].push(originalData[keyscoll[i]][j][k]);
                    }
                }
        }
    }

    postMessage([alarmLog,outval]);


  }

}