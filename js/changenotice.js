function change(titles, titlearr){
    for(let i=0;i < titles.length; i++){
        let title = titles[i];
        title.innerHTML=titlearr[i];
    }
}

function changeone(){
    let titles = document.getElementsByClassName("title");
    let titlearr = ["제목", "웹페이지 개설 안내", "웹페이지 사용법", "사용자 안내", "서버 안내", "프로그램 안내"]
    change(titles,titlearr)
}

function changetwo(){
    let titles = document.getElementsByClassName("title");
    let titlearr = ["제목", "공지 6", "공지 7", "공지 8", "공지 9", "공지 10"]
    change(titles,titlearr)
}

function changethree(){
    let titles = document.getElementsByClassName("title");
    let titlearr = ["제목", "공지 11", "공지 12", "공지 13", "공지 14", "공지 15"]
    change(titles,titlearr)
}

function changefour(){
    let titles = document.getElementsByClassName("title");
    let titlearr = ["제목", "공지 16", "공지 17", "공지 18", "공지 19", "공지 20"]
    change(titles,titlearr)
}

function changefive(){
    let titles = document.getElementsByClassName("title");
    let titlearr = ["제목", "공지 21", "공지 22", "공지 23", "공지 24", "공지 25"]
    change(titles,titlearr)
}