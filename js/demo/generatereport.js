
var deid = [];

$(':checkbox').change('click', function () {

    var $this = $(this);
    ids = this.id;

    $('.' + ids).toggle();


});

$('.mbtn').click(function () {
    var $this = $(this);
   let tempp =[];
   bid = $(this).attr('name');
   $("." + bid + " " + "option:selected").each(function () {
    var $thisss = $(this);
    tempp.push($thisss.val());
    

})
   if(!tempp.length){
       alert("no parameter selected");
       $("#"+ids).prop("checked", false);
       $('.' + ids).hide();
       return false;
   }
    

    bid = $(this).attr('name');
    
    deid.push(bid);


    $("." + bid + " " + "option:selected").each(function () {
        var $this = $(this);
        pcode = $this.val();
        deid.push(pcode);

    });
   
    // ADD SEPARTOR
    deid.push("#");
    console.log(deid);

    $('#' + bid).attr('disabled', true);
    $('.' + bid).hide();
    alert("Device and its parameter are added to report");

});

function submitfrm() {


    devcname = [];
    devcid = [];

    $("input:checkbox").each(function () {
        var $this = $(this);

        if ($this.is(":checked")) {
            devcname.push($this.attr("name"));
            devcid.push($this.attr("id"));



        }

    });

    if (devcname.length == 0) {
        alert(" select atleast one device");
        return false;

    }
    $('#hidname').val(devcname);
    $('#hidid').val(devcid);
    $('#jasonhandle').val(deid);

}