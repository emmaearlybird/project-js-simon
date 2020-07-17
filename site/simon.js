// This file contains the game logic.
// All the event-listening should happen in buttons.js

let colors = ["green", "red", "yellow", "blue"];
function start(){
  for (let i = 0; i<colors.length; i++){
    let color = colors[i];
    console.log(color);
    switch(color){
      case "green":
        let green = document.querySelector(".green");
        document.getElementById("buttonColors").innerHTML = "green";

      case "red":
        let red = document.querySelector(".red");
        document.getElementById("buttonColors").innerHTML = "red";

      case "yellow":
        let yellow = document.querySelector(".yellow");
        document.getElementById("buttonColors").innerHTML = "yellow";

      case "blue":
        let blue = document.querySelector(".blue");
        document.getElementById("buttonColors").innerHTML = "blue";
    }
  }
}





 /*window.onload = function() {
let colorArray = ["Blue ", "Green", "Red", "Yellow"];
let currentPrompt = colorArray[0];
console.log(currentPrompt);
document.getElementById("buttonClicks").innerHTML = currentPrompt;
};

{const colorArray = ["Blue", "Green", "Red", "Yellow"];
const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];

console.log("random color =>", randomColor);

}

if (currentPrompt = colorArray[0]) {

}
else {

}

if else alert

function myFunction() {
  var hour = new Date().getHours();
  var greeting;
  if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }
  document.getElementById("demo").innerHTML = greeting;
}
*/


/*if currentPrompt == (color that was clicked on){
  move on to colorArray++
}*/
//print out the first color on the screen

//wait for a mouse click
//if the person clicks on the blue, do the next one
//if the person clicks a different one, game over


/*let countClicks = 0;
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("mousedown", function() {
    var current = document.getElementsByClassName("active");
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
    countClicks++;
    console.log(countClicks +" clicks");*/
