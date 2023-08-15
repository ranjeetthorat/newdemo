var idleTime = 0;
$(document).ready(function () {
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
});

function timerIncrement() {
    idleTime = idleTime + 1;
    console.log("count", idleTime);
    console.log(new Date().toLocaleTimeString());
    if (idleTime > 5) { // 10min
        console.log("function executed")
        window.location = "userlogout.php?admin=admin"
    }
}