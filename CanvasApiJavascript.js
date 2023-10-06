
let myCanvas = document.getElementById("myCanvas");
let ctx = myCanvas.getContext("2d");
setInterval(aufrufen, 20);

let rechteck2X = 900
let rechteck3X = 850
let rechteckX = 150
let rechteckY = 150

let moveLeft = false;
let moveRight = false;
let moveUp = false;
let moveDown = false;

async function getDataNew() {

  const url = "https://goweather.herokuapp.com/weather/tokyo";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    let apiAntwortNew = json;
    console.log(apiAntwortNew);
    let description = apiAntwortNew.description;
    console.log(description);
    if (description !== "Sunny") {
      var image = new Image();
      let myCanvas = document.getElementById("myCanvas");
      let ctx = myCanvas.getContext("2d");
      image.src = "https://images.unsplash.com/photo-1489769459544-1b2a788df7b6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      image.onload = function() {
        ctx.drawImage(image, 0, 0, myCanvas.width, myCanvas.height);
        document.getElementById('loadingText').style.display = 'none';
        document.getElementById('myCanvas').style.display = 'block';
      }
    } else {
      document.getElementById('loadingText').style.display = 'none';
      document.getElementById('myCanvas').style.display = 'block';
    }
  } catch (error) {
    console.error(error.message);
  }


}

window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch(e.keyCode) {
        case 37:
            // left key pressed
            break;
        case 38:
            rechteckY -=5// up key pressed
            break;
        case 39:
            // right key pressed
            break;
        case 40:
          rechteckY +=5// u// down key pressed
            break;
    }
}


function rechteck(){
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.rect(rechteckX, rechteckY, 100, 100);
  ctx.fill();

}

function rechteck2(){
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(rechteck2X, 150, 50, 50);
  ctx.fill();

}

function rechteck3(){
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.rect(rechteck3X, 450, 50, 50);
  ctx.fill();

}

function crash(){
  if ((rechteckX+100) == rechteck2X){
  console.log("Getroffen")
  }
}

function move(){
  rechteck2X -= 5;
  rechteck3X -= 10;

}

function aufrufen () {
  ctx.clearRect(0, 0, 1000, 800);
  rechteck()
  rechteck2()
  rechteck3()
  move()
  crash()
  }

getDataNew();
