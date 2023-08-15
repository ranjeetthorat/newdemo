$("#hdid").val(optionI[0]);
$("#depname").change(function () {
    var id = $(this).find("option:selected").attr("id");


    $("#did").val(optionI[id]);
    $("#hdid").val(optionI[id]);
    // do something here


});


function addAdmin(vald) {

    console.log("Here");
    var aname = $("#aname").val();
    var aid = $("#aid").val();
    var aemail = $("#aemail").val();
    var status = $('#status').val();
    var depname = $("#depname").val();
    var acontact = $("#acontact").val();
    var adesi = $("#adesi").val();
    var apass = $("#apass").val();
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







    //var myInput = document.getElementById('did');
    // myInput.disabled = false;
    var did = $("#did").val();

    $.ajax
        ({
            type: 'post',
            url: './manuAthuntication.php',
            data: {
                createUser: "ucreateUser",
                aname: aname,
                aid: aid,
                aemail: aemail,
                depname: depname,
                acontact: acontact,
                adesi: adesi,
                apass: apass,
                status: status,
                expiry: expiry,
                role: role,
                did: did
            },
            success: function (response) {
                if (response == "success") {
                    console.log(" succes here");
                    alert("Info updated ");
                }
                else {
                    console.log("here");
                    alert("Id  already present.Please choose different ID");

                }
            }
        });



    return false;

}


