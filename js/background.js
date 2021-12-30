const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.png",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.png",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "15.jpg",
]
const body = document.querySelector("body");



function paintbgImage(chImage){

  // const Image = document.createElement("backgroundImage");
  const image = new Image();
  image.src=`img/${chImage}`;
  image.classList.add("bgImage"); //Image에 bgImage 클래스 추가
  body.appendChild(image); //body의 자식에 image 추가
}

function set(){
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  paintbgImage(chosenImage);
}

set();




// //console.log(bgImage);

// document.body.appendChild(bgImage) //body에 html엘 추가

// //document.body.style.backgroundImage = bgImage; 

// function homzzang() {

//     document.body.style.backgroundImage = "url('`img/${chosenImage}`')";
  
//   }
// // homzzang();
//   console.log(document.body.style);

  
// //   function homzzangg() {

// //     document.body.style.backgroundColor = "Tomato";
  
// //   }
// //   homzzangg();