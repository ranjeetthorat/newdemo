function checkpass(vald) {

        let currentpass = document.querySelector('#oldpass').value;
        
   


    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (vald.value.match(passw)) {
        //alert('Correct, try another...')
        //return false;
    }
    else {
        alert('plz set strong password')
        return false;
    }
var flag=false;
    console.log('hey');
    var p1 = $('#p1').val();
    var p2 = $('#p2').val();
    if (p1 == p2) {
        return true;

    }
    else {
        alert("password mis-match ");
        return false;

    }



}