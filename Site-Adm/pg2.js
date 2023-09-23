const body = document.querySelector("body");
const sideBar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");
const content = body.querySelector('.content')

toggle.addEventListener("click", () => {
  sideBar.classList.toggle("close");
  content.classList.toggle("expanded");

  if (sideBar.classList.contains("close")) {
    content.style.marginLeft = "55px";
  } else {
    content.style.marginLeft = "220px";
  }
});