let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener("click", function() {
  audio.play();
});

var audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");


let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener("click", function() {
  audio.play();
});
var audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");


let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener("click", function() {
  audio.play();
});
var audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");


let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener("click", function() {
  audio.play();
});

var audio = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");


















var header = document.getElementById("buttons");
var btns = header.getElementsByClassName("simon-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
  btns[i].addEventListener("mouseup", function() {
    this.className = this.className.replace(" active", "");
  });
}
