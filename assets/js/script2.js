let blue = document.getElementById("blue");
let red = document.getElementById("red");
let green = document.getElementById("green");
let yellow = document.getElementById("yellow");

blue.addEventListener("click", function () {
  colorChange(blue);
});
red.addEventListener("click", function () {
  colorChange(red);
});
green.addEventListener("click", function () {
  colorChange(green);
});
yellow.addEventListener("click", function () {
  colorChange(yellow);
});
function colorChange(color) {
  color.style.backgroundColor = "black";
}
