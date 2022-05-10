function vali(){
    var text=document.getElementById("username");
    var password=document.getElementById("password");
    if(text.value=="team" && password.value=="teamsoul"){
        alert("logged in successfully");
    }else{
        alert("it is not allowed")
    }
}
function checkForm(form)
{
if(form.inputfield.value == "") {
    alert("Error: Input is empty!");
    form.inputfield.focus();
    return false;
}
var re = /^[\w ]+$/;
if(!re.test(form.inputfield.value)) {
    alert("Error: Input contains invalid characters!");
    form.inputfield.focus();
    return false;
    }
    return true;
}
