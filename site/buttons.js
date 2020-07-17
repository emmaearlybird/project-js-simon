//I've commented out some stuff in the loop at the bottom,
//this was just me working on trying to get the counter to only
//go on red

let colorWeShouldPick = "red";


let audiogreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener("click", function() {
  audiogreen.play();
  document.getElementById("buttonClicks").innerHTML = "green";
});

let audiored = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener("click", function() {
  audiored.play();
  document.getElementById("buttonClicks").innerHTML = "red";
});

let audioyellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener("click", function() {
  audioyellow.play();
  document.getElementById("buttonClicks").innerHTML = "yellow";
});

let audioblue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener("click", function() {
  audioblue.play();
  document.getElementById("buttonClicks").innerHTML = "blue";
});

let audiored = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener("click", function() {
  audiored.play();
  redButtonClick = "red";
  document.getElementById("buttonClicks").innerHTML = "red";
    if (colorWeShouldPick == "red"){
      alert("yay");
    }
});



//button lights and click counter:
let header = document.getElementById("buttons");
let btns = header.getElementsByClassName("simon-button");
let countClicks = 0;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    //if (colorWeShouldPick == redButtonClick){
      countClicks++;}
    //console.log(countClicks +" clicks");
    document.getElementById("clicks").innerHTML = countClicks;
  });
  btns[i].addEventListener("mouseup", function() {
    this.className = this.className.replace(" active", "");
  });

