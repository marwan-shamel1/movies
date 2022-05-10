
/*function fun(){
    
    document.getElementById("uu").style.display="block";}

    const butt=document.getElementById("dropmenu");
    const list=document.getElementById("bom");
    butt.addEventListener("click",(event)=>{
    if(list.style.display=="none"){
        list.style.display="block"
    }else{
        list.style.display="none";
    }
})
function mov(){
    document.getElementById("bom").style.display="block";
}
function mout(){
    document.getElementById("bom").style.display="none";
}*/
/*var x = document.getElementById("dropmenu");
x.addEventListener("click", myThirdFunction);
x.addEventListener("mouseover", myFunction);



function myFunction() {
    document.getElementById("uu").style.display = "block";
}


function myThirdFunction() {
    document.getElementById("uu").style.display = "none";
}*/
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