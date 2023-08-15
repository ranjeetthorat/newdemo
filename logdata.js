function constructLog(tabledata,keyscoll){

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
              
                        
              const tbody = document.querySelector(`[data-databody='${keyscoll[i]}`);
              tbody.appendChild(trow);
                

            }




    }
      
}