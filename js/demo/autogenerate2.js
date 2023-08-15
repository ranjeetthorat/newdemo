

/**
 * auto generate device id
 */
try {
function makeid(length) {
    
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


$('#autogen').click(function () {

    var k = makeid(7);

    $('#adddeviceid').val(k);
    // console.log(k);


});
} catch(e) {
    console.log(e.message);
}