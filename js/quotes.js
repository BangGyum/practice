const quotes = [
    {
        quote: "너는 지금 배가 고픈가? 그럼 먹어라",
        author: "백종원",
    },
    {
        quote: "넌 바로전 24시간 동안 후회없이 보냈는가?",
        author: "백수",
    },
    {
        quoto: "궁지에 몰렸을 때만 보이는 길도 있을거야",
        author: "어떤 아저씨"
    },
    {
        quote: "공포는 악이 아니다. 자신의 약함을 인지하고 있다는 것이다",
        author: "길다트",
    },
    {
        quote: "인간은 차별당하기 위해 존재한다. 그로인해 인간은 싸우며 경쟁하고 진보한다",
        author: "브리타니아",
    },
    {
        quote: "여자의 거짓말을 용서할줄 아는게 남자다",
        author: "모솔",
    },
    {
        quote: "피할수 없으면 즐겨라 ",
        author: "로버트 엘리엇",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다",
        author: "찰스다윈",
    },
    {
        quote: "한번의 실패를 영원한 실패와 혼동하지 마라",
        author: "F.스콧 핏제랄드"
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
        author: "파올로 코엘료",
    },


];
//말이 위, 작가는 아래에 표시됨
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//console.log(quotes[0]);
//Math 함수 사용. Math.random() 0~1랜덤.
//Math.random() * 10 하면 0 에서 9
//뒤를 짤라야한다. 세가지 방법이 있음.
//1. Math.round(1.1) = 1      (0.1) = 0     반올림
//2. Math.ceil(1.01) = 2     천장이란 뜻     아이에 올림.
//3. Math.floor(1.99999) = 1                아이에 내림.

//콘솔에서 Math.floor(Math.random() *10)

// console.log(quotes[Math.floor(Math.random() *10)]);

//문제는 갯수가 바뀌면 따로 수정해줘야함.
//.length 사용.

//console.log(quotes[Math.floor(Math.random() * quotes.length)]);
TodaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = TodaysQuote.quote;
author.innerText = TodaysQuote.author;

