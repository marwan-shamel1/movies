function myFunction() {
    var x = document.getElementById("uu");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}
const dark=document.getElementById("dark")
const body=document.getElementById("body")
dark.addEventListener("click",(da)=>{

body.classList.toggle("dark")

})

function Func() {
    document.getElementById("ok").style.backgroundColor = "white";
}

function chan(){
    document.getElementById("yu").style.backgroundColor="red";
    document.getElementById("yu").innerHTML="watch it now;"
}


