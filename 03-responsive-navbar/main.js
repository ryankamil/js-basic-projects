const btn = document.querySelector(".hamburger");
btn.onclick = function () {
  const navBar = document.querySelector(".nav-bar");
  navBar.classList.toggle("active");
};
