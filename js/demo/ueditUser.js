var setUserhid = $('#aid').val();
$('#haid').val(setUserhid);
$("#hdid").val(currentdeptId);
var myindex = optionD.indexOf(currentdeptname);

document.querySelector(`option#\\3${myindex}`).setAttribute('selected','true');

$("#depname").change(function () {
    var id = $(this).find("option:selected").attr("id");


    $("#did").val(optionI[id]);
    $("#hdid").val(optionI[id]);
    // do something here


});

function editUuser(vald) {

    //console.log("Here"); 
    var aname = $("#aname").val();
    var aemail = $("#aemail").val();

    var depname = $("#depname").val();
    var acontact = $("#acontact").val();
    var adesi = $("#adesi").val();
    var apass = $("#apass").val();
    var status = $('#status').val();
    var uflag = $('#uflag').val();
    /* var myInput = document.getElementById('did');*/
    /*myInput.disabled = false;*/
    var hdid = $("#hdid").val();
    var haid = $("#haid").val();
    var role = $('#groupname').val();
    var expiry = $('#expiry').val();


    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    if (vald.value.match(passw)) {
        //alert('Correct, try another...')
        //return false;
    }
    else {
        alert('password not strong')
        return false;
    }





    // $('#aidd').val(uid);
    // var uid = sessionStorage.getItem("adminidedit");
    $.ajax
        ({
            type: 'post',
            url: './manuAthuntication.php',
            data: {
                edituserr: "uedituserr",
                aname: aname,
                haid: haid,
                aemail: aemail,
                depname: depname,
                acontact: acontact,
                adesi: adesi,
                apass: apass,
                status: status,
                uflag: uflag,
                expiry: expiry,
                role: role,
                hdid: hdid
            },
            success: function (response) {
                if (response == "success") {
                    //console.log(" succes here");
                    alert("Info updated ");
                    //console.log(status);
                    //console.log("okk");
                }
                else {
                    //console.log(" fail here");
                    alert("database Error");

                }
            }
        });



    return false;

}			 