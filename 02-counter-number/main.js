// initial score count
let count = 0;

// DOM tree
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// event listen
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    // console.log(btn);
    const styles = e.currentTarget.classList;
    //increment and decrement on count
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // console.log(styles);

    // coloring score
    if (count > 0) {
      value.style.color = "blue";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "#222";
    }
    // display count for click button
    value.textContent = count;
  });
});
