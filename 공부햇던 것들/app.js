// const 바뀌지않는다. variable 은 재선언 가능. let은 재선언은 안되나 다시 값변경 가능
// const a = 10;
// const b = 20;
// let myName = "gyum";


// console.log(a + b);
// console.log(a * b);
// console.log(a / b);
// console.log("Hello " + myName);

// myName = "Bang";

// console.log("Hello your new name is " + myName);

//boolean  = true or false
// const amIFat = true;
//     //null은 값이 없다는것, false는 그 자체가 값. null은 비엇다기보단, 빈공간으로 채운것 
// let something;
//     //위는 undefined라고 뜸. 데이터타입같다고 함, 물론 null true false 도 타입이라고 할수있음.
//     //undefined은 메모리는 존재하는데, 값이 없엉...
//     //null은 자연적으로 발생하지않음. 우리가 여기엔 값이 '없다'라는 것을 알려줄때 쓰는것.
//     //null은 비어있음을 의도해서 보여줌
// console.log(amIFat);
// console.log(something);
// const mon = "moon";
// const tue = "tuue";
// const wed = "weed";
// const daysOfWeek = [mon, tue, wed, "thu", "fri", "sat"];

//     //const nonsense = [1, 2, "hello", false, null, undefined];

// console.log(daysOfWeek);
//     //console.log(nonsense);

// console.log(daysOfWeek[0])

//     //add one more  day to the 
// daysOfWeek.push("sun");
// console.log(daysOfWeek);

//----------------------------------------------------------------------------object
// const playerName = "Nico";
// const playerPoints = 121212;
// const playerHansdsome = ture;

    // 이거를 player.name 이런식으로 해주ㅏㅈ
    //밑에가 object
// const player = {
//     name:"gyum",
//     points:10,
//     fat:false,

// };
// player.fat=true;
//     //const여도 수정이 가능한데, object 안에 선언된걸 업데이트하는거지 
// player.lastname ="gogi";
// player.points = player.points + 15;
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);  
//     //리스트와는 다름. 리스트는 모두 같은걸 나타내줘야 편함

//     //function 은 어떤 코드를 캡슐화해서 반복 가능.
//     // {} 안에있는걸 부를때마다 발생
    
// function sayHello(name, age){
//     console.log("Hello! my name is ", name, ", age : ",age);
// }

// sayHello("nico",10);
// sayHello("nicodd",20);

// function plus(firstNumber, secondNuber){
//     console.log(firstNumber + secondNuber);
// }
// plus();
//     // 이거하면 Nan뜨는데 not a number
// plus(8, 60);

// const player2 = {
//     name : "nico",
//     sayHello2: function(otherPlayerName){
//         console.log("sayHello "+otherPlayerName+ ", nice to meet you");
//     }
// }

// console.log(player2.name);
// player2.sayHello2("niii");
// player2.sayHello2("kkkk");

// const calculation = {
//     add: function(fnum,snum){
//         alert(fnum + snum);
//     },
//     sub: function(fnum,snum){
//         console.log(fnum-snum);
//     },
//     mutiply: function(fnum,snum){
//         console.log(fnum*snum);
//     },
//     divide: function(fnum,snum){
//         console.log(fnum/snum);
//     }
// }

// calculation.add(5,6);
// calculation.sub(10,1);
// calculation.mutiply(10,20);
// calculation.divide(1000,5);

    //function으로 console.log나 alert를 사용하지 않기를 바람. 나를 위한거지 남을 보여주기 위해서는 뭔가 효율적이진 않음.

// console.log(calculation.add(2,3));
    //이러면 un디파인이 뜨는데, 결국 자체에는 값이 없다는것.

// const age = 96;
// function calKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// }
// const krAge= calKrAge(age);
// console.log(krAge);

// const calculation = {
//     add: function(fnum,snum){
//         return fnum + snum;
//     },
//     sub: function(fnum,snum){
//         return fnum-snum;
//     },
//     mutiply: function(fnum,snum){
//         return fnum*snum;
//     },
//     divide: function(fnum,snum){
//         return fnum/snum;
//     }
// }

// console.log(calculation.add(3,3));
// console.log(calculation.divide(4,3));
// const mul1=calculation.mutiply(5,5);
// console.log(mul1);

// const addResult = calculation.add(6,6);
// const subResult = calculation.sub(addResult, 2);
// const mutiplyResult = calculation.mutiply(subResult,3);

// console.log(addResult);
// console.log(subResult);
// console.log(mutiplyResult);

// const age = prompt("How old are you?");
// console.log(typeof age, typeof parseInt(age));
// console.log(age,parseInt(age));
//     //만약 글자로 입력하면, parseInt부분은 NaN 이 나옴. not a number
//     //parse는 123같은것만 되지 문자는 못함.

// const age = parseInt(prompt("How old are you?"));
// // console.log(typeof age);
// // console.log(age);

// console.log(isNaN(age));
//     //넘버인지 아닌지 boolean 리턴, 숫자면 false , 문자면 ture 
// if(isNaN(age) || age<0){
//     console.log("문자네요. 숫자로 입력하세요. 양수로 입력하세요");
// } else if(age<18 ) {
//     console.log("you are too young.");
// } else if(age>=18 && age<=50){
//     console.log("you can drink");       // && = AND  ,  || = OR
// }else if(age === 100){
//     console.log("you 100 years");
// }     else if(age>50) {
//     console.log("you can drink, but it's hard");
// }                                 
                                        //else는 없어도 됨.
                                        //= 하나는 value를 지정
                                        // 세개는 비교구문
                                        // not은 !==
// if((a && b) || (c && d)){}

//document.title="asdfasdf";
// document 는 웹사이트를 뜻함.
// 콘솔에서 document.body 하면 그부분을 가져옴.

// const title=document.getElementById("title");
// //console.log(title); 하면 보임.
// console.dir(title);
//     //h1 title의 많은 정보를 보여주게됨.
//         //js에서 html을 읽음.
//         //콘솔에서 안에보이는것중 false를 html에서 입력하면 true로 바꿀수있음. (예로 <h1 autofocus id=~~~~> 하면 true가 됨)
//         //JS는 HTML을 그대로 가져오는것이 아닌 object로 가져와서 보여줌 (바로 위처럼 true false로 구분)
//         //역시 class를 추가하면 className에 보임
//         //그럼 여기서 ~~.~~ 해서 바꾸면 바꿔지겟징?
// title.innerText="Got you!";
//         //이러게하면 콘솔 옆에 요소에서 바껴보임. 
// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");

// console.log(hellos);

// const got = document.getElementsByTagName("h1");    //태그 지정가능

// console.log(got);

//     //가장 멋진 element 가져오는방법

// const got1 = document.querySelector(".hi h1");
//     //CSS방식으로 element를 검색 (위 생긴게 style 처럼 생겻자너?) / 그럼 다른 방식으로도 부를 수 있겟지 ("div h1") #hi 등등등
//     //class("hi")안에 h1을 가져올 수 있음\

//     //hi라는 클래스가 많다면 무조건 첫번째 것만 나옴
//     //hi 안에 h1이 많다면 첫번째 h1만 가져옴   
//     //모두 가져오고 싶으면 querySelectorAll 을 사용하ㅏ면 됨.
// //const got1 = document.querySelector(".hi h1:hello"); 이처럼 조건문도 가능
// console.log(got1); //-> 내부를 보고싶다면 console.dir
// console.dir(got1); // 여기에 css가 있는데 css또한 고칠 수 있음.
// //got1.style.color = "blue";  하지만!! css에서 해주는게 좀더 맞음.물론 틀린건 아니지만
// got1.innerText = "Click me";

    //js는 모든 이벤트를 잡을 수 있다.
    //이벤트를 js가 듣기때문에 listener

// function handleGotClick(){
//     console.log("got was clicked!");
// }
// function handleMouseEnter(){
//     got1.innerText = "Mouse is here";
// }
// function handleMouseLeave(){
//     got1.innerText = "Mouse is gone";
// }
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier!");
// }
// function handleWindowOffline() {
//     alert("sos no wifi");
// }
// function handleWindowOnline() {
//     alert("Wifi is good");
// }

//  got1.addEventListener("click", handleGotClick);
    // got.onclick = handleGotClick;    // 위랑 똑같음. 하지만 이벤트 리스너를 사용하는 이유는 
                            //.removeEvnetListener로  제거가 가능하기 때문에.
// got1.addEventListener("mouseenter", handleMouseEnter ); //마우스가 오면 실행
// got1.addEventListener("mouseleave", handleMouseLeave );

// /////////////////////////////////

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy" , handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);


            //console.log(got1) 해서 페이지에서 열어보면, 거기에 앞에 on 이라고 붙는것이 event listener임. 당연히 on 빼고
            //콘솔에서 document.body 하면 볼수잇음 (body, head, title정도만 가능, )
            //근데 div 같은것 못가져옴. querySelector 같은걸로 가져와야함


//////////////////////////////////
    //버튼 누를때마다 색상 변경하기

// function handleGotClick(){
//     const currentColor = got1.style.color ;
//     let newColor;
//     if (currentColor === "blue"){
//         newColor = "tomato";
//     }else{
//         newColor = "blue";
//     }
//     got1.style.color =newColor;

//     console.log(got1.style.color);
// }
// got1.addEventListener("click", handleGotClick);

/*
        //하지만 스타일은 css에서 만지자
const got1 = document.querySelector("div.hi h1 ") //class hi를 가진 div 내부의 first-child인 h1을 가져오는것

function handleGotClick(){
    //got1.className="active"; //이 변수는 getter 이자 setter, 지금은 정했고, console.log로 가져올수 있고.
    const clickedClass = "clicked";
    if(got1.className === clickedClass){
        got1.className = "";
    }else {
        got1.className=clickedClass; //이름을 두번적으면 오타날 수도 있음.
                                //얘의 문제는 전에 있는 애가 뭐든 상관없이 지워버림.
                                //최초의 class 적용됫던건 없어짐.
                                //그래서 위에서 수정해줘야되는데 별로 좋은방법이 아님.
                                
    }

}  그래서 밑에 해결 */


/*
const got1 = document.querySelector("div.hi h1 ") //class hi를 가진 div 내부의 first-child인 h1을 가져오는것
    //className은 전이 뭐든 상관없이 아이에 교체하는데
    //classList를 사용해 조금 다르게 할수있음. 마우스 대보면 element의 class내용물을 조작하는것을 허용한다고 돼있음.
function handleGotClick(){
    const clickedClass = "clicked";
    if(got1.classList.contains(clickedClass)){ //clickedClass를 담고있는가 
        got1.classList.remove(clickedClass);
    }else {
        got1.classList.add(clickedClass); //이렇게하면 기존건 남기고 뒤에 추가햇다가 삭제햇다가 반복
    }

}
got1.addEventListener("click", handleGotClick);
    하지만 toggle을 사용하면 위처럼 복잡할 필요가 없음*/


const got1 = document.querySelector("div.hi h1 ") 

function handleGotClick(){
    got1.classList.toggle("clicked");
}
got1.addEventListener("click", handleGotClick);

        //toggle은 이미 있으면 삭제하고, 없으면 추가해줌.
        