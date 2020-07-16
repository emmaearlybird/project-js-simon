/*let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  greenButton.style.border="thick solid pink";
});

let redButton = document.querySelector('.simon-button.red');
redButton.addEventListener('click', function() {
  redButton.style.border="thick solid black";
});

let yellowButton = document.querySelector('.simon-button.yellow');
yellowButton.addEventListener('click', function() {
  yellowButton.style.border="thick solid black";
});

let blueButton = document.querySelector('.simon-button.blue');
blueButton.addEventListener('click', function() {
  blueButton.style.border="thick solid black";
});*/

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
