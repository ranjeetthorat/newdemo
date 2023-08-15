function alaramlogreport(tabledata,keyscoll,outvalues){
console.log(tabledata);
/**
 * add max/min  row
 */
        for(let i=0;i<keyscoll.length;i++){
            const trow = document.createElement('tr');
            let min = document.createElement('th');
            
            min.textContent = "Min  /  Max =>";
           min.setAttribute('colspan',"2");
            min.classList.add('small');
            
            trow.appendChild(min);
            
            for(let j=0;j<outvalues[keyscoll[i]][0].length;j++){
                let param = document.createElement('th');
                const min = outvalues[keyscoll[i]][0][j].min;
                const max = outvalues[keyscoll[i]][0][j].max;
                param.classList.add('small');
                param.setAttribute('scope','col');
                param.textContent=` (${min} / ${max})`;
                trow.appendChild(param);
            }
            let tbody = document.querySelector(`[data-dataheadAlarm='${keyscoll[i]}`);
            tbody.appendChild(trow);
        }


/**
 * acruall data
 */
 for(let i=0;i<keyscoll.length;i++){
       
        
    for(let row=0;row<tabledata[keyscoll[i]][0].length;row++){
        const trow = document.createElement('tr');
                for(let j=0;j<tabledata[keyscoll[i]].length;j++){
                    if(j==0){
                        let date = document.createElement('td');
                        let time = document.createElement('td');
                        date.classList.add('small');
                        time.classList.add('small');
                        date.textContent=tabledata[keyscoll[i]][j][row].date;
                        time.textContent=tabledata[keyscoll[i]][j][row].time;
                        trow.appendChild(date);
                        trow.appendChild(time);
                    }
                      let valuetd = document.createElement('td');
                      valuetd.classList.add('small');
                      valuetd.textContent = tabledata[keyscoll[i]][j][row].value;
                      trow.appendChild(valuetd);
                }
      
                
      const tbody = document.querySelector(`[data-databodyAlaram='${keyscoll[i]}`);
      tbody.appendChild(trow);
        

    }




}



}