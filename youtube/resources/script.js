const asideIcon = document.querySelector("#aside-icon");
const aside = document.querySelector("main");

asideIcon.addEventListener("click", function () {
  // 스타일 변경!
  aside.classList.toggle("aside-change");
});
