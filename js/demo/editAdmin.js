var setAdminhid=$('#aid').val();
$('#haid').val(setAdminhid);
// console.log(setAdminhid);
$("#hdid").val(optionI[0]);
$("#depname").change(function(){
var id = $(this).find("option:selected").attr("id");



  $("#did").val(optionI[id]);
  $("#hdid").val(optionI[id]);
    // do something here
    

});

	



function editAAdmin(vald){

 //console.log("Here"); 
 var aname=$("#aname").val();
  var aemail=$("#aemail").val();
 
  var depname=$("#depname").val();
  var acontact=$("#acontact").val();
  var adesi=$("#adesi").val();
  var apass=$("#apass").val();
   var role = $('#groupname').val();
  var status = $('#status').val();
  var uflag = $('#uflag').val();
  var expiry =$('#expiry').val();
  
  //console.log(status);
  
  
  
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
      if(vald.value.match(passw)) 
      { 
      //alert('Correct, try another...')
      //return false;
      }
      else
      { 
      alert('password not strong')
      return false;
      }
  
  
  
  
  
  
  
  
  
  
  
  

   /* var myInput = document.getElementById('did');*/
      /*myInput.disabled = false;*/
     var hdid=$("#hdid").val();
     var haid=$("#haid").val();
     
    // $('#aidd').val(uid);
    // var uid = sessionStorage.getItem("adminidedit");
    $.ajax
              ({
                      type:'post',
                      url:'./manuAthuntication.php',
                       data:{
                          editAdmin:"editAdmin",
                          aname:aname,
                          haid:haid,
                          aemail:aemail,
                          depname:depname,
                          acontact:acontact,
                          adesi:adesi,
                          apass:apass,
                          status:status,
                          role:role,
                          expiry:expiry,
                          uflag:uflag,
                          hdid:hdid
                     },
                     success:function(response) {
                             if(response=="success")
                                 {
                                    //console.log(" xxxsucces here");
                                   alert("Info updated ");
                                   
                                 }
                                 else
                                 {
                                    // console.log(" fail here");
                                    
                                   alert("database Error");
                                  
                                 }
                       }
              });
       

  
        return false;
       
}			 