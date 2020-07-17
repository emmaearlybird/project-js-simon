let startButton = document.querySelector('.start');
startButton.addEventListener("click", function(){
  start();
});

let header = document.getElementById("buttons");
let btns = header.getElementsByClassName("simon-button");
let countClicks = 0;
let buttonWeDidClick = "";
let colorChoice = ["red","green","blue","yellow"];
let randomColor = colorChoice[Math.floor(Math.random()*colorChoice.length)];
let colorWeShouldPick = [];
let failSound = new Audio("http://soundbible.com/grab.php?id=1830&type=mp3");

let ii = 0;
console.log(randomColor);
colorWeShouldPick.push(randomColor);

function start(){
if (ii < colorWeShouldPick.length) {
  document.getElementById("prompt").innerHTML = colorWeShouldPick[ii];

//GREEN BUTTON
let audiogreen = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener("mousedown", function() {
  audiogreen.play();
  document.getElementById("buttonClicks").innerHTML = "green";
    buttonWeDidClick = document.getElementById("buttonClicks").innerHTML;
  if (colorWeShouldPick[ii] == buttonWeDidClick) {
    countClicks++;
    randomColor = colorChoice[Math.floor(Math.random()*colorChoice.length)];
    colorWeShouldPick.push(randomColor);
    ii++;
    document.getElementById("prompt").innerHTML = colorWeShouldPick[ii];
  } else {
    document.getElementById("buttonOne").innerHTML = "Try Again";
    document.getElementById("prompt").innerHTML = "nope";
    failSound.play();
  }
});

//RED BUTTON
let audiored = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener("mousedown", function() {
  audiored.play();
  buttonWeDidClick == colorWeShouldPick;
  document.getElementById("buttonClicks").innerHTML = "red";
    buttonWeDidClick = document.getElementById("buttonClicks").innerHTML;
  if (colorWeShouldPick[ii] == buttonWeDidClick) {
      countClicks++;
      randomColor = colorChoice[Math.floor(Math.random()*colorChoice.length)];
      colorWeShouldPick.push(randomColor);
      ii++;
      document.getElementById("prompt").innerHTML = colorWeShouldPick[ii];
  } else {
      document.getElementById("buttonOne").innerHTML = "Try Again";
      document.getElementById("prompt").innerHTML = "nope";
      failSound.play();
    }
});

//YELLOW BUTTON
let audioyellow = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener("mousedown", function() {
  audioyellow.play();
  buttonWeDidClick = "yellow";
  document.getElementById("buttonClicks").innerHTML = "yellow";
    buttonWeDidClick = document.getElementById("buttonClicks").innerHTML;
  if (colorWeShouldPick[ii] == buttonWeDidClick) {
      countClicks++;
      randomColor = colorChoice[Math.floor(Math.random()*colorChoice.length)];
      colorWeShouldPick.push(randomColor);
      ii++;
      document.getElementById("prompt").innerHTML = colorWeShouldPick[ii];
  } else {
      document.getElementById("buttonOne").innerHTML = "Try Again";
      document.getElementById("prompt").innerHTML = "nope";
      failSound.play();
  }
});

//BLUE BUTTON
let audioblue = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");
let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener("mousedown", function() {
  audioblue.play();
  buttonWeDidClick = "blue";
  document.getElementById("buttonClicks").innerHTML = "blue";
    buttonWeDidClick = document.getElementById("buttonClicks").innerHTML;
  if (colorWeShouldPick[ii] == buttonWeDidClick) {
      countClicks++;
      randomColor = colorChoice[Math.floor(Math.random()*colorChoice.length)];
      colorWeShouldPick.push(randomColor);
      ii++;
      document.getElementById("prompt").innerHTML = colorWeShouldPick[ii];
  } else {
      document.getElementById("buttonOne").innerHTML = "Try Again";
      document.getElementById("prompt").innerHTML = "nope";
      failSound.play();
  }
});

//button lights and click counter:
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    //countClicks++;
    document.getElementById("clicks").innerHTML = countClicks;
    console.log(countClicks +" clicks");
  });
  btns[i].addEventListener("mouseup", function() {
    this.className = this.className.replace(" active", "");
  });
}
}
}
