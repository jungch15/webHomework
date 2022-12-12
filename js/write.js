function boldchange(a){
    let content = document.getElementById("wtcontent");
    if(a.style.color == "blue"){
        content.style.fontWeight="";
        a.style.color="black";
    }
    else{
        content.style.fontWeight="bold";
        a.style.color="blue";
    }
    
}
function italicchange(a){
    let content = document.getElementById("wtcontent");
    if(a.style.color == "blue"){
        content.style.fontStyle="";
        a.style.color="black";
    }
    else{
        content.style.fontStyle="italic";
        a.style.color="blue";
    }
}
function chblack(){
    let content = document.getElementById("wtcontent");
    content.style.color="black";
    color1 = document.getElementById("color");
    color1.style.color="black";
}
function chred(){
    let content = document.getElementById("wtcontent");
    content.style.color="red";
    color1 = document.getElementById("color");
    color1.style.color="red";
}
function chblue(){
    let content = document.getElementById("wtcontent");
    content.style.color="blue";
    color1 = document.getElementById("color");
    color1.style.color="blue";
}
function chyellow(){
    let content = document.getElementById("wtcontent");
    content.style.color="yellow";
    color1 = document.getElementById("color");
    color1.style.color="yellow";
}