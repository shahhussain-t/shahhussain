const button = document.querySelector(".bar_con");
const menu = document.querySelector(".menu");
console.log(menu);

let btn = false;
button.addEventListener("click", () => {
  if (btn) {
    menu.classList.replace("unactive", "active");
    setTimeout(() => {
      menu.style.display = "none";
    }, 2000);
    btn = false;
  } else {
    menu.style.display = "block";

    menu.classList.replace("active", "unactive");
    btn = true;
  }
});
