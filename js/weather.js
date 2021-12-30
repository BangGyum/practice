function onGeoOk(position){
    const lat = position.coords.latitude; //위도
    const lng = position.coords.longitude; //경도
    const apiKey = "6db8cfea26bd1a95d0f571b2eac3182b" ;
    
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;

    //fetch(url); //네트워크에서 확인하면 URL로 누군가 요청한 것이 보임. JS가 나 대신 불러준거임.
                //눌러보면 나옴
                //이제 얻으면 뭘해야될지 우리가 설정해야함
                //fetch는 promise임, 당장 뭔가 일어나지 않고 시간이 조금 걸ㄹ린 뒤에 일어남
    fetch(url).then(response => response.json()).then(data => {
        
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");

        weather.innerText = data.weather[0].main;
        //city.innerText= data.name;
        city.innerText= `${data.name} / ${data.main.temp} C`;
    });
    //response.json에서 json은 그냥 url로 가져온것 전부 (그게 다 json이라서)

}
function onGeoError(){
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// https://openweathermap.org/api
// api는 다른 서버와 연결할 수 있는 방법
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//api.openweathermap.org/data/2.5/weather?lat=37.5682&lon=126.9977&appid=6db8cfea26bd1a95d0f571b2eac3182b
//http://api.openweathermap.org/data/2.5/weather?lat=37.5682&lon=126.9977&appid=6db8cfea26bd1a95d0f571b2eac3182b
