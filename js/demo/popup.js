function popUp() {
 
    $.Zebra_Dialog(`<strong>Expiry Alert, your password will expire in ${leftDays} days. </strong> `, {
  'type':     'question',
  'title':    'Password Expiry Notice',
  'buttons':  ['Change password now', 'Ignore'],
  'onClose':  function(caption) {
      if(caption == 'Change password now'){
        window.location.href = 'globalpasschange.php'
      }
  }
});
  
   }