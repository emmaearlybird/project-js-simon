/*let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('click', function() {
  greenButton.style.border="thick solid black";
});*/

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('onmousedown', function() {
  greenButton.style.border="thick solid black";
});

let greenButton = document.querySelector('.simon-button.green');
greenButton.addEventListener('onmouseup', function() {
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
});
