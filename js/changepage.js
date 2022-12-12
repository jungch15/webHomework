
function chone(){
    let cards = document.getElementsByClassName("card");
    let imgarr = ["kyeong.jpg", "hankang.jpg", "jongro.jpg", "tteokbokki.jpg", "baekban.jpg", "bibimbab.jpg"]
    let textarr = ["경복궁 향원정", "롯데 타워", "종로 거리", "떡볶이","백반","비빔밥"]
    change(cards, imgarr, textarr);
}

function chtwo(){
    let cards = document.getElementsByClassName("card");
    let imgarr = ["hankang.jpg", "baekban.jpg", "bibimbab.jpg", "fashion.jpg", "cityview.jpg", "buildingnight.jpg"]
    let textarr = ["한강", "음식", "비빔밥", "패션","시티뷰","야경"]
    change(cards, imgarr, textarr);
}

function chthree(){
    let cards = document.getElementsByClassName("card");
    let imgarr = ["hanryu.jpg", "kpop.jpg", "airplane.jpg", "guseok.png", "kimchi.jpg", "KoreanFlag.jpg"]
    let textarr = ["한류", "케이팝", "비행기", "구석","김치","국기"]
    change(cards, imgarr, textarr);
}
function chfour(){
    let cards = document.getElementsByClassName("card");
    let imgarr = ["beauty.png", "food.jpg", "kyeong.jpg", "visitseoul.jfif", "image1.jpg", "fashion.jpg"]
    let textarr = ["뷰티", "음식", "경복궁", "서울","풍경","패션"]
    change(cards, imgarr, textarr);
}
function chfive(){
    let cards = document.getElementsByClassName("card");
    let imgarr = ["webtoon.jpg", "bibimbab.jpg", "tteokbokki.jpg", "KoreanFlag.jpg", "buildingnight.jpg", "history.jpg"]
    let textarr = ["웹툰",  "비빔밥", "떡볶이","국기","야경","역사"]
    change(cards, imgarr, textarr);
}

function change(cards, imgarr, textarr){
    for(let i=0;i < cards.length; i++){
        let card = cards[i];
        let children = card.children;
        for(let j=0; j< children.length;j++){
            let child = children[j];
            
            if(j == 0){
                
                child.src = "https://jungch15.github.io/webHomework/img/" + imgarr[i];
            }
            else{
                child.innerHTML = textarr[i];
            }

        }
    }
}