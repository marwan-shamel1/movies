function myfunction(){
    alert("you can click at the phto to watch the movie or series");
}

var a;
function show_hide()
{
    if(a==1)
    {
        document.getElementById("h2").style.display="inline";
        return a=0;
    }

    else
    {
        document.getElementById("h2").style.display="none";
        return a=1;

    }

}