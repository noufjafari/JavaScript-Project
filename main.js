//go to the game page
function startgame(){
    save()
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
    Swal.fire({
                icon: 'success',
                title: 'Great',
                text: 'You win now go to the next',
                })
              setTimeout(" nextpage()", 2000);
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
    Swal.fire({
        icon: 'error',
        title: 'Opps',
        text:'Wrong door try agin',
        })
      setTimeout(" nextpage()", 3000);

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


// save the name from the local storge 
function save() { 
    var fieldValue = document.getElementById('textfield').value; 
    localStorage.setItem('text', fieldValue); 
} 
    
// Reading data 
var storedValue = localStorage.getItem('text'); 
document.querySelector(".thename").innerHTML = storedValue;


