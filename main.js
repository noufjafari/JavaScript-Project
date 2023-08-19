//go to the game page
function startgame(){
    location.href = "./mainPage.html"  

}
//go to the home page
function gohome(){
    location.href = "./index.html"  
}


//level 1
//if win goes to nextpage
function changewin(){
    let img = document.getElementById("door3")
    img.src="girlopendoor.svg"
    setTimeout("changenext()", 100);
}
function changenext(){
    alert("Great you win now go to the next");
    nextpage()
}

//if loss try agin and and go to next page
function changeloss1(){
    let img = document.getElementById("door1")
    img.src="dooropen.svg"
    setTimeout("gonext()", 300); 
}
function changeloss2(){

    let img = document.getElementById("door2")
    img.src="dooropen.svg"
    setTimeout("gonext()", 300); 
}
function gonext(){
    alert("Opps Wrong door try agin");
    nextpage()
}



//level 2
function nextpage(){
    location.href = "./mainpage2.html"  
}
//if win goes to result win page
function changewin2(){
    let img = document.getElementById("door3")
    img.src="girlopendoor.svg"
    setTimeout("nextpagefinal1()", 300);
}
function nextpagefinal1(){
    location.href = "./resultPage.html"  
}



//if loss try agin and and go to result loss page
function changeloss3(){
 let img = document.getElementById("door1")
    img.src="dooropen.svg"
    setTimeout("nextpagefinal2()", 300); 
}
function changeloss4(){
    img = document.getElementById("door2")
           img.src="dooropen.svg"
       setTimeout("nextpagefinal2()", 300); 
   }

function nextpagefinal2(){
    location.href = "./resultPage2.html"  
}



//the timer to count if the time is finish = loss

let theminutes = 1;
let time = theminutes *60;
let countdown = document.getElementById('timer');
setInterval(updateCountdown,1000);
function updateCountdown(){
    let minutes = Math.floor(time/60);
    let sec = time % 60;

    countdown.innerHTML=`${minutes}: ${sec}`;
    time--;
    setTimeout("nextpagefinal2()", 60000);
}

