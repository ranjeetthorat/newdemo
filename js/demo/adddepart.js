function addDepa(){
					  
    var dname=$("#dname").val();
    var dcontact=$("#dcontact").val();
    var demail=$("#demail").val();
    var did=$("#did").val();
    
    if( dname != "" && dcontact != "" && demail != "" && did != ""){
        
        
        
      $.ajax
                ({
                        type:'post',
                        url:'./manuAthuntication.php',
                        data:{
                             addDepSet:"addDepSet",
                             dname:dname,
                             dcontact:dcontact,
                             demail:demail,
                             did:did
                        },
                        success:function(response) {
                                if(response=="success")
                                    {
                                       console.log(" succes here");
                                      alert("Info updated ");
                                      $('.login').load("addDepart.php");
                                    }
                                    else
                                    {  
                                        //console.log("fail here");
                                       alert("Id  already present.Please choose different ID");
                                      
                                    }
                          }
                });
           }

                       else
                       {
                        alert("Please Fill All The Details");
                       }

           return false;
        
        
        
        
        
    
    }
    
    
    

function makeid(length) {
var result           = '';
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++ ) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}

$('#autogen').click(function(){

var k=makeid(7);

$('#did').val(k);
// console.log(k);


});