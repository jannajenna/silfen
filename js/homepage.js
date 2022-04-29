let atc = document.querySelector(".hoverImg");
let element = document.querySelector(".addtocart");
atc.addEventListener("mouseenter", function () {
  showaddtocart();
});
atc.addEventListener("mouseleave", function () {
  hideaddtocart();
});
function showaddtocart() {
  element.classList.remove("hide");
}
function hideaddtocart() {
  element.classList.add("hide");
}
