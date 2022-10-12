const hamburger = document.querySelector(".navbar__hamburger");
const navMenu = document.querySelector(".navbar__list");
const navBtn = document.querySelector(".navbar__button");

hamburger.addEventListener("click", ()=> {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navBtn.classList.toggle("active");
})