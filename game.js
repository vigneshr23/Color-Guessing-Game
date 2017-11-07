var colors = [
    "rgb(255, 193, 7)",
    "rgb(33, 150, 243",
    "rgb(156, 39, 176)",
    "rgb(255, 87, 34)",
    "rgb(205, 220, 57)",
    "rgb(158, 158, 158)"
];
var squares = document.querySelectorAll(".square");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var interval = 0,
    interval1 = window.interval1 = 0,
    timer = window.timer = 12;

/*//var queryColor = null;
var rgb = [];
function getRandomcolor() {
  
  for (var i = 1; i <= 3; i++) {
    var min = 0;
    var max = 255;
    rgb.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  console.log(rgb);
  return "rgb(" + rgb + ")";
}*/

//var rgb = [];
var game = {}

function getRandomcolor() {

    var settings = {
        "maxCount": 3,
        "minVal": 0,
        "maxVal": 255
    };
    //rgb.push(generateRandomNumber(settings));
    var rgbThingy = generateRandomNumber(settings);
    return "rgb(" + rgbThingy + ")";
}

function getHeaderColor() {
    var square = document.getElementsByClassName("square");
    var settings = {
        "maxCount": 1,
        "minVal": 0,
        "maxVal": square.length
    };
    return generateRandomNumber(settings);
}

function generateRandomNumber(settings) {
    var rgbCode = [];
    for (var i = 1; i <= settings.maxCount; i++) {
        var min = settings.minVal;
        var max = settings.maxVal;
        rgbCode.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return rgbCode;
}

function startTimer() {
    if (timer == 0) {
        //clearInterval(interval1);
        timer = 12;
    }
    document.getElementById("timer").innerHTML = timer + " seconds left.";
    timer--;
}

var header;

function colorChanger() {
    for (var i = 0; i < squares.length; i++) {
        //squares[i].style.background = colors[i];
        squares[i].style.background = getRandomcolor();
    }
    header = document.getElementsByTagName("header")[0];
    var selectedColor = document.getElementsByClassName("square")[getHeaderColor()].style.background;
    Object.assign(header.style, { backgroundColor: selectedColor });
}

function stopGame() {
    clearInterval(interval1);
    window.timer = 12;
    clearInterval(interval);
}


start.addEventListener("click", function() {
    colorChanger();
    /*  if (interval) {
          clearInterval(interval);
      }
      if (interval1) {
          clearInterval(interval1);
      }*/
    interval1 = setInterval(startTimer, 1000);
    interval = setInterval(colorChanger, 12000);
});

stop.addEventListener("click", function() {
    stopGame();
});

var currSquare = document.querySelectorAll('.square');
currSquare.forEach(function(el) {
    el.addEventListener("click", function() {
        if (this.style.backgroundColor == header.style.backgroundColor) {
            alert("Yep, you got it!");
            stopGame();
        }
        // level up logic
        else {
            this.style.backgroundColor = "#222233";
            this.style.transitionDelay = "0.6s ease";
            //fadeOut(this);
        }
        //try again logic
    });
})