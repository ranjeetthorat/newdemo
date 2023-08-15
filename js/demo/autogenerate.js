/**
 * add departments options to select
 */

for (var p = 0; p < optionD.length; p++) {
    $('#adddevdep').append('<option id="' + optionI[p] + '">' + optionD[p] + '</option>');
}
$("#adddevcedid").val(optionI[0]);
$("#hadddid").val(optionI[0]);
$("#adddevdep").change(function () {
    var id = $(this).find("option:selected").attr("id");

    //console.log(optionI[0]);
    $("#adddevcedid").val(id);
    $("#hadddid").val(id);
    //do something here


});

/**
 * auto generate device id
 */
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