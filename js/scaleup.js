let tg = document.getElementsByClassName("target")[0];
let imgPath = "https://jungch15.github.io/webHomework/img/한류분포.jpg";

let photo = document.getElementsByClassName("photo")[0];
photo.style.backgroundImage = `url(${imgPath})`;

//이미지 확대 (마우스 갖다댐)
function up(){
    photo.style.transformOrigin = `0 0`;
    photo.style.transform = `scale(2)`; //2배확대
}
function down(){
    photo.style.transform = `scale(1)`; //크기복원
    
}
function move(e, a){
    // (현재마우스위치 - 이미지 기준좌표) / 기준너비 (최초 0, 0)
        let oriX = ((e.pageX - a.offsetLeft) / a.offsetWidth) * 100; 
        let oriY = ((e.pageY - a.offsetTop) / a.offsetHeight) * 100;
        photo.style.transformOrigin = `${oriX}% ${oriY}%`; //이미지의 기준점을 새로 설정한 위치로 변경
}
//이미지 축소 (마우스 벗어남)
function init(){
    tg.addEventListener("mouseover", up);
    tg.addEventListener("mouseout", down);
    //마우스 따라 그림 이동
    tg.addEventListener("mousemove", move());
}


