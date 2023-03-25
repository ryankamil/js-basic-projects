// array
const hexa = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];

// Dom tree
const color = document.getElementById("color");
const btn = document.querySelector(".btn");

// event listen
btn.addEventListener("click", function () {
  let hexaColor = "#";

  for (let i = 0; i < 6; i++) {
    hexaColor += hexa[getRandomNumber()];
  }
  color.textContent = hexaColor;
  document.body.style.backgroundColor = hexaColor;
  //console.log(hexaColor);
});

// function get
function getRandomNumber() {
  return Math.floor(Math.random() * hexa.length);
}
