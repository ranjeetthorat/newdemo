
function deviceHandler() {  // console.log("a");
let k = 40;
let z = 60;

var paramater = [];
var min = [];
var max = [];
var pcode =[];
let p = 11;

    for (let i = 20; i < 30; i++) {
        let a = $('#'+i).val().trim();
        if( a != '' && a != ' ') {
            paramater.push(a);
        
        let b = $('#'+k).val().trim();
        if( b != '' && b != ' ') {
            min.push(b);
        } else {
            min.push(0);
        }

        let c = $('#'+z).val().trim();
        if( c != '' && c != ' ') {
            max.push(c);
        } else {
            max.push(0);
        }
        pcode.push(p);
        k++; z++; p++;
    }
}

    if (paramater.length == 0)
    {
        alert("Add atleast one parameter");
        return;
    }


   


    $.ajax

        ({
            type: 'post',
            url: './manuAthuntication.php',
            data: {
                uadddevicepg: "uadddevicepg",
                paramarray: paramater,
                minarray: min,
                maxarray: max,
                pcodearrat: pcode,
                devName: devName,
                devId: devId,
                devDepName: devDepName,
                color: color,
                devDepId: devDepId
            },
            success: function (response) {
                if (response == "success") {
                    //console.log(" succes here");
                    alert("device updated ");
                    window.location.href = 'uaddDevice.php';

                }
                else {
                    //console.log("here");
                    alert("Id  already present.Please choose different ID");
                    window.location.href = 'uaddDevice.php';
                }
            }



        })

    

}



