function popUp() {
 
    $.Zebra_Dialog(`<strong>Are you sure you want to delete? </strong> `, {
  'type':     'question',
  'title':    'Confirm delete',
  'buttons':  ['Yes', 'No'],
  'onClose':  function(caption) {
      if(caption == 'Yes'){
        window.location.href = `udeleteuser.php?uid=${globalname}&flag=${flag}`;
      }
  }
});
  
   }