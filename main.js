
function changewin(){
    let img = document.getElementById("door3")
    img.src="girlopendoor.svg"
    setTimeout("changenext()", 100);
}

function changewin2(){
    let img = document.getElementById("door3")
    img.src="girlopendoor.svg"
    setTimeout("changenext()", 100);
}
function nextpagefinal(){
    location.href = "./resultPage.html"  
}
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

function changeloss(){

    let img = document.getElementById("door2")
    img.src="dooropen.svg"
    setTimeout("gonext()", 300); 
}

function gonext(){
    alert("Opps Wrong door try agin");
    nextpage()
}
function changenext(){
    alert("Great you win now go to the next");
    nextpage()
}

function nextpage(){
    location.href = "./mainpage2.html"  
}