//array
const colors = ["red", "blue", "#bbb", "rgb(100,122,122)"];

// Dom tree
const color = document.getElementById("color");
const btn = document.querySelector(".btn");

// event listen
btn.addEventListener("click", function () {
  const randomNumber = colors[getRandomNumber()];
  //console.log(randomNumber);
  color.textContent = randomNumber;
  document.body.style.backgroundColor = randomNumber;
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
