
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


getDataNew();
