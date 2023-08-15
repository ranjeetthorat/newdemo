function constructGraphD(cdata,namelist){
    
let container = document.querySelector('#pwisedev');
for(let i=0;i<cdata.length;i++){
    const charContainer = document.createElement('div');
    charContainer.classList.add('chart-container');
    const canvas=document.createElement('canvas');
    canvas.classList.add('devicechart');
    canvas.setAttribute('id',i+600);
    canvas.setAttribute('data-paramname',cdata[i].pname);
    charContainer.appendChild(canvas);
    container.appendChild(charContainer);
}

console.log("final cdata",cdata)

for(let i=0;i<cdata.length;i++){
  let passValue =  [...cdata[i].datasets.keys()];
    let timesdata=getTime(cdata[i].datasets.get(passValue[0]));
    let valueData=[];
    let chartdata={};
        for(let k=0;k<passValue.length;k++){
            let x={};
            x.label=namelist[passValue[k]][0][0].name;
            x.fill=false;
            x.lineTension=0.1;
            x.backgroundColor=colorsarray[k];
            x.borderColor=colorsarray[k];
            x.pointHoverBackgroundColor=colorsarray[k];
            x.pointHoverBorderColor=colorsarray[k];
            let points=getvaluesd(cdata[i].datasets.get(passValue[k]));
            x.data=points;
            valueData.push(x);
        }

        chartdata = {
            labels:timesdata,
            datasets:valueData
        }

        let dctx=document.querySelector(`[data-paramname="${cdata[i].pname}"]`);  
        let LineGraph = new Chart(dctx, {
            type: 'line',
            data:chartdata,
            options:{title:{display:true,text:cdata[i].pname},
               
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


function getTime(data){
    let dataset=data.map(item=>{
        return makedate(item.date) + " - "+item.time;
        
    });
    
    return dataset;
    
    }
    function getvaluesd(data){
      
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