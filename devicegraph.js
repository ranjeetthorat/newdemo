function constructGraph(filtered,keydata,namelist){

for(let i=0;i<keydata.length;i++){
    let timesdata=[];
    let valueData=[];
    let chartdata={};
    // setting time axis
    for(let k=0;k<filtered[keydata[i]][0].length;k++){
        timesdata.push(makedate(filtered[keydata[i]][0][k].date)+' - '+filtered[keydata[i]][0][k].time);    
    }
  //setting y axis adding object to valuedata
  for(let z=0;z<namelist[keydata[i]][0].length;z++)  {
      let x={};
      x.label=namelist[keydata[i]][0][z].parameter;
      x.fill=false;
      x.lineTension=0.1;
      x.backgroundColor=colorsarray[z];
      x.borderColor=colorsarray[z];
      x.pointHoverBackgroundColor=colorsarray[z];
      x.pointHoverBorderColor=colorsarray[z];
      let points=[];
      for(let p=0;p<filtered[keydata[i]].length;p++){
          if(filtered[keydata[i]][p][0].pcode==namelist[keydata[i]][0][z].pcode){
                points=getvalues(filtered[keydata[i]][p]);
                x.data=points;
                break;
          }
      }
      valueData.push(x);
      chartdata = {
          labels:timesdata,
          datasets:valueData
      }
      
     
} 
let ctx=document.querySelector(`[data-deviceid="${keydata[i]}"]`);

   let LineGraph = new Chart(ctx, {
     type: 'line',
     data:chartdata,
     options:{title:{display:true,text:namelist[keydata[i]][0][0].name},
		
     scales: {
 yAxes: [{
   scaleLabel: {
     display: true,
     labelString: "Data Values"
     
   }
 }],
 
 xAxes: [{
             ticks: {
                 autoSkip: true,
                 maxRotation: 70,
                 minRotation: 70,
                 fontSize: 12 ,
                 fontColor: 'black',
                 fontStyle: "bold"
             },
 
         },
     
         {
       afterBuildTicks: scale => scale.ticks = [],
       gridLines: {
         drawOnChartArea: false
                },
                

     
         
         }]
}
     
     
     
     }
   });
    
}

}

function getvalues(data){
let dataset=data.map(item=>{
    let x= +item.value;
    return x;
});

return dataset;

}

function makedate(data){
let n= data.split('.');
return `${n[2]}/${n[1]}/${n[0]}`

}