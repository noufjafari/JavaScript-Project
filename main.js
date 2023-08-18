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

//the level
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