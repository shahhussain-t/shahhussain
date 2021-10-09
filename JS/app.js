const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navBar");
const tole = document.querySelector(".menu-btn-burger");

let btn = false;
menuBtn.addEventListener("click", () => {
  if (btn) {
    navbar.classList.replace("open", "close");
    menuBtn.classList.remove('open')

    setTimeout(() => {
      navbar.classList.replace("close", "ab");
    }, 1000);

    btn = false;
  } else {
    navbar.classList.replace("ab", "open");
    navbar.classList.replace("close", "open");
    menuBtn.classList.add('open')
    btn = true;
  }
  
  tole.classList.toggle("open")
});
