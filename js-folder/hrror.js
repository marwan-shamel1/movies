var i=0
var slidimage =["/media/14-3.jpg","/media/_315x420_fd3b5b88684b45030ca1804e51ba4aafad0311913527a1d95327fbeacf12fe08.jpg","/media/Penny-Dreadful-s3-250x366.webp","/media/Channel-Zero-s3.jpg","/media/i_Q-l_O7uiDzx9ERKXkTGAHaKd.jpg"]

function slidshow (){
    document.slidshow.src=slidimage[i];
    if (i<slidimage.length-1){
        i++;
    }
    else{
        i=0;
    }
setTimeout("slidshow ()",2300);
}
slidshow ();
var image=[("/media/11b25fea-76ea-4b4a-aa9c-d23182094911.jpg","/media/13d59a6e-119b-443e-9648-b53f54ca9e4b.webp","/media/14-3.jpg","/media/283-2832945_previous-button-transparent-background-next-and-previous-button.jpg")];
var i=0;
function nextmedia(){
document.getElementsById('js');
if(i< image.length)  
{i++ ;}
else{
    i=0;
}
}
nextmedia();