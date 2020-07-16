// This file contains the game logic.
// All the event-listening should happen in buttons.js






window.onload = function() {
let colorArray = ["Blue ", "Green", "Red", "Yellow"];
let currentPrompt = colorArray[0];
console.log(currentPrompt);
document.getElementById("buttonClicks").innerHTML = currentPrompt;



};


if (currentPromt = colorArray[0]) {

}
  ....
} else {

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
</script>









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
