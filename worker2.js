onmessage = function(e) {
let graphObj = e.data[2];
let filtDat = e.data[0];
let Keyscoll = e.data[1];

/**
 * construct unique params
 */
let paramset = new Set();
for(let i=0;i<Keyscoll.length;i++){
    for(let z=0;z<graphObj[Keyscoll[i]][0].length;z++){
        paramset.add(
                        JSON.stringify({
                        name:graphObj[Keyscoll[i]][0][z].parameter,
                         pcodes:graphObj[Keyscoll[i]][0][z].pcode
                         })
                   );
    }


}

let paramarr = [];
paramset.forEach(value=>paramarr.push(JSON.parse(value)));
console.log("param arry",paramarr);
cdataarray=[];
for(let i=0;i<paramarr.length;i++){
let x ={};
x.pname=paramarr[i].name;
let devicelist =[];
/**
 * get devicelist for current parameter 
 */
for(let k=0;k<Keyscoll.length;k++){
        for(let z=0;z<graphObj[Keyscoll[k]][0].length;z++){
            if(graphObj[Keyscoll[k]][0][z].parameter==paramarr[i].name){
                devicelist.push(Keyscoll[k]);
                break;
            }
           
        }
}

/**
 * map it with devicname values
 */

 let map = new Map();
for(let m=0;m<devicelist.length;m++){
    
    for(let z=0;z<filtDat[devicelist[m]].length;z++){
        let datavalues=[];
        let innerobj={};
        if(filtDat[devicelist[m]][z][0].pcode==paramarr[i].pcodes){
            //datavalues.push(filtDat[devicelist[m]][z]);
         
            map.set(devicelist[m],filtDat[devicelist[m]][z]);
            
            break;
        } 
    }
}
x.datasets=map;
cdataarray.push(x);


}/**
main for loop ends first in functn  */
console.log("cdata",cdataarray);
postMessage([cdataarray,graphObj]);





}/**
fucntipon ends */