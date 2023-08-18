// Image of Car
const windoor =
"girlopendoor.svg";

function change(){
    let door3 = document.getElementById("door3")
    if( door3.src=="doorlock.svg" ){
        door3.src=windoor;
        location.href = "./resultPage.html"  
    }

}