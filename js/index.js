var c = document.getElementById("dropmenu");
c.addEventListener("click", myThirdFunction);
c.addEventListener("mouseover", myFunction);

function myFunction() {
    document.getElementById("uu").style.display = "block";
}function myThirdFunction() {
    document.getElementById("uu").style.display = "none";
}

const dark=document.getElementById("dark")
const body=document.getElementById("body")
dark.addEventListener("click",(da)=>{

body.classList.toggle("dark")

})