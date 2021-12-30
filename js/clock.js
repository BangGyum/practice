//

const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //date.get~~ 하면 int형이기때문에 padStart를 쓰려면 text로 바꿔야함
    //Stirng(~~)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    const mSeconds = String(date.getMilliseconds()).padStart(3,"0");
    //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    clock.innerText = `${hours}:${minutes}:${second}:${mSeconds}`;
}
getClock();
setInterval(getClock, 1);
//setInterval(sayHello,1000);  1초 간격으로 실행

//setTimeout(sayHello, 3000) 3초 후 실행

//콘솔에 new Date() 치면 헌재 날짜 시간 뜸.
//const date = new Date()
//date.getDate() 몇일인지 뜸
//date.getDay() 일요일은 0
//date.getFullYear  년도
//date.getHours()
//date.getMinutes()
//date.getSeconds()  근데 00초라고하면 이쁠 것을 0이라고 해서 안이쁨. 12:33:1


//초를 2개로 만드는법, 밑을 콘솔에 입력
//"1".padStart(2,"0"); 2개가 아니라면 앞에 " "를 붙여줌. pad는 padding을 추가해달라는것
//"1".padEnd(2,"0"); 끝에
//"hello".padEnd(20,"x") 하면 20될떄까지 x로 전부채움
