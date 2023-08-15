function jss() {
   try {
       
    // console.log(listofId);
   let result = listofId.filter(item=>{
       
      let temp = $('#'+item).val();
     
      if (temp.length)
       return true;
       else 
       return false;
       
   });
   if (!result.length){
       alert("select one device atleast");
       return false
   }
   $('#hidid').val(result);
   const jsonarr = [];
   result.forEach(element => {
        jsonarr.push(element);
        let temp = $('#'+element).val();
        temp.forEach(item=>jsonarr.push(item));
        jsonarr.push('#');
       
   });
   $('#jasonhandle').val(jsonarr);

   document.querySelector('#setform').submit();
} catch(e){
    
    return false;
}


  
  }