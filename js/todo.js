const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
//const toDoInput = document.querySelector("#todo-form input"); : 전체에서 찾기
const toDoList = document.querySelector("#todo-list");

let toDos = [] //값이 만들어질때마다 여기다가 넣자
//그리고 이걸 localStorage에 넣고싶다... 근데 array를 넣을순 없나봄
//localStorage는 텍스트만 가능
const TODOS_KEY = "todos";

function saveToDos(){ //localStorage 에 저장해주는 펑션
    //localStorage.setItem("todos",toDos); //이것만 하면 문제는 , 페이지를 다시실행해서 다시값을 넣으면 다시초기화됨
                                        //또, 텍스트로 저장되기때문에 하나씩 못부름
    //JSON.stringify(변수명)  하면 전부 텍스트화, 텍스트로 바꿔서 넣어주기 때문에 배열로 저장되나봄.
    localStorage.setItem("todos",JSON.stringify(toDos));
    //stringify로 Array 자체를 문자열로 만들고 (["뭐시기","저시기"] ==> "["뭐시기","저시기"]")
    //JSON.parse("["뭐시기","저시기"]") -> 반대로 배열로 뽑힘

    //JSON.parse(localStorage.getItem("todos")) 
    //맨밑에서 하자
}


function handleToDoSubmit(event){
    event.preventDefault();

    const newTodo=toDoInput.value;
    toDoInput.value="";  //칸 비워주기
    const newTodoObj = {
        id:Date.now(),
        text:newTodo,
        
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}
toDoForm.addEventListener("submit",handleToDoSubmit);

function paintToDo(newToDo) { //todo 그리기, html에다가 li태그로 list 부분에 추가해서 넣기
    /*
    <li>
        <span>여기에 값을 입력받음</span>
        <button>toDo를 지우는 버튼을 만들예정</button>
    </li>
        이런식으로 HTML에 넣고싶음*/

    //console.log("i will paint",newToDo); 확인
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span"); 
    span.innerText = newToDo.text;
    const button = document.createElement("button");

    button.innerText = "✖";
    button.addEventListener("click",deleteToDo);
    //append는 맨 마지막에 정리해놓자
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
} //이것의 문제점, 추가할 순 있는데 지울순없다, 그래서 버튼만들기. 그리고 새로고침하면 다없어짐

//우리가 만들 버튼은 click event를 기다리고 있어야 한다

//근데 버튼이 여러개면 구분을 어케하지? 

function deleteToDo(event){
    //console.log(event);   //여기서 눌러보면 x,y 좌표로 구분되는데 그건 좀 아니고
    //console.log(event.target);             //path를 보면 어느 li인지 알려주게됨. target
    //console.dir(event.target);      //perentNode 에 찾아가면 누가 부모인지 알 수 있음.
    //console.dir(event.target.parentElement.innerText); //이거다
    const lii=event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(lii.id)); //해당 id를 빼버리기 , 근데 안됨
    console.log(typeof lii.id); //지워보면 string임
    lii.remove();
    saveToDos();
}

function sayHello(item){ //지금의 item도 보여줄수있음. 우리가 뭐있는지 모르니깐
    console.log("this is ",item);
}
//밑이랑 같음
//(item) => console.log("this is a",item);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos){ // saved !== null
    const parsedToDos= JSON.parse(savedToDos);
    toDos = parsedToDos;
    console.log(parsedToDos);
    //parsedToDos.forEach(sayHello); //for문인데 요소들마다 가로안에 기능이 실행되게 됨.1요소 = 1행동
    //parsedToDos.forEach((item) => console.log("this is a",item)); //위에서 function을 따로만드는것보단
                                                                    //이게 더 짧음. 속도는 차이없음
    //사실 위에처럼 할 필욘 없다. 그냥 우리가 만들엇던 paint 펑션을 사용하자
    parsedToDos.forEach(paintToDo); //item을 반환해주나봄
}//문제가 있따. 페이지를 새로고침하고 다시입력하면 지워짐
//왜냐하면 맨위쪽에있는 toDos라는 배열이 항상 비워져 있기 때문임



//삭제버튼을 누를때 우리의 db인 toDos에서 지우는방법, 키를 주고 키로 삭제
// [{id:1212 , text:"a"}]
//id는
//Date.now() 1000분의 1초까지의 숫자 반환



//object에서 삭제방법은, 진짜 지우는것보단 제외하고 다른데에 추가해둠?\
//지우고 싶을때 제외한다! filter 사용
function sexyFilter(item){ //반듯이 true를 반환해야함.
    //false를 리턴하면 그 item은 새array에 포함되지 않은 것
    //결국 true를 리턴한 요소만 남아있고, false이면 제외된 것
    // 선택옵션 같은 느낌


}

//콘솔에서 functino sexyFilter(){return false};
// [1,2,3,4,5].filter(sexyFilter)
//하면 전부 반환안됨.

//function sexyFilter(item){return item !== 3};
//[1,2,3,4,5].filter(sexyFilter)
//결과 : [1, 2, 4, 5]

//const arr = [1233,45454,222,111,1,5,7,543,77777]  천이상 걸러내기
//function sexyFilter(num){ return num < 1000}
//arr.filter(sexyFilter)

//const todos = [{"id":1626601044121,"text":"hi"},{"id":1626605542549,"text":"a"},
//              {"id":1626605542954,"text":"a"},{"id":1626605544962,"text":"a"}]
//function sexyFilter(todo) { return todo.id !==1626601044121}
//todos.filter(sexyFilter)
/*
0: {id: 1626605542549, text: "a"}
1: {id: 1626605542954, text: "a"}
2: {id: 1626605544962, text: "a"}
length: 3
__proto__: Array(0)
*/

//const arr = [1,2,3,4]
//const newArr = arr.filter(item => item >2)
// newArr
//  (2) [3, 4]
[1,2,3,4].filter(sexyFilter); //sexy필터에 1,2,3,4를 집어넣음 sexyFilter(1) 2,3,4, 등등 4번부르는것.
                        //filter 펑션은 새로운 어레이를 주는거임