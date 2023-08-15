	/**hide lastrow */	
	
	try{
		let hidelastrow = document.querySelector('.outer tbody');
     hidelastrow.lastElementChild.style.display="none";	
	} catch(e){
			console.error("error in hiding last line of main  table",e);
	}

try {
    emptyrows.forEach(element => {
        document.querySelector(`[data-rowcount='${element}']`).style.display="none";
    });
} catch(e){
  console.error("error in hiding rows",e);
}
