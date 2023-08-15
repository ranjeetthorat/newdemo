for(let i =0; i < chek.length; i++) {
    $(`:checkbox[name='${chek[i][0]}\[\]'][value=${chek[i][1]}]`).prop("checked","true");
}