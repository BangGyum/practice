// const loginForm = document.querySelector("#login-form");
// const loginForm = document.getElementById("login-form");
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
    //const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");
/*
function onLgBtnClick(){
    //console.dir(loginInput); 찾아보면 value있음.
    const username = loginInput.value;
    if(username === ""){
        alert("please write your name");
    }else if(username.length > 16){
        alert("your name is too long");
    }else{
    console.log(username);
    }
    //console.log("hello" ,loginInput.value);
        //이렇게하면 헬로 방겸 이런식으로 되는데, 아무것도 입력안하면 hello만 뜨게됨.
    console.log("click");
}
loginButton.addEventListener("click", onLgBtnClick);
*/
/*
function onlgSubmit(tomato){ //알아서 event에 대한 argument를 js가 채워줌 (방금 실행된 event에 관해)
    tomato.preventDefault(); //기본 행동을 막는것, form이 새로고침되는걸 막음.
    // const username = loginInput.value;
    console.log(tomato);
}
loginForm.addEventListener("submit", onlgSubmit); //얘는 앞에 이벤트가 발생할때 실행
*/


// onlgSubmit();    //얘는 읽는 즉시 실행

/////////////////////////////////////////

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //보통 string만 저장할때 , 중요한 정보가 아니라 대문자로 햇음
const USERNAME_KEY = "username"; //이래야 오타나면  js가 알려줌

function handleLinkClick(event){
    event.preventDefault();
    const username = loginInput.value; //이 이름을 api의 localStorage에 저장할 수 있음.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    // greeting.innerText = "hello " + username;
    paintGreetings(username);
    //////////////////////////////////////
    localStorage.setItem(USERNAME_KEY, username);
} 
loginForm.addEventListener("submit", handleLinkClick);
// link.addEventListener("click",handleLinkClick);



/////////////////////////// 로컬 저장소 local storage
//localStorage.setItem(USERNAME_KEY,"bang")
//localStorage.getItem(USERNAME_KEY);
//localStorage.removeItem(USERNAME_KEY);


////////////////////로컬 스토리지에 정보가 있으면 form을 보여주면 안되고, 반대로 없으면 보여줘야함

function paintGreetings(username) {     //h1에 입력하고 보여주는것.
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLinkClick);
} else{
    // show the greething
    paintGreetings(savedUsername);
    
}

