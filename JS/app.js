const button = document.querySelector(".hum_div");
const navbar = document.querySelector(".navBar");

let btn = false;
button.addEventListener("click", () => {
  if (btn) {
    navbar.classList.replace("open", "close");

    setTimeout(() => {
      navbar.classList.replace("close", "ab");
    }, 1000);

    btn = false;
  } else {
    navbar.classList.replace("ab", "open");
    navbar.classList.replace("close", "open");
    btn = true;
  }
});
