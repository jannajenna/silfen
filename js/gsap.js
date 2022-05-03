window.addEventListener("DOMContentLoaded", init);

function init(event) {
  const introS = document.querySelector(".introS");

  gsap.from(".firstPara", {
    duration: 1.2,
    x: -400,
    ease: "power1.inOut",
  });
  gsap.from(".secondPara", {
    duration: 1.2,
    x: 400,
    ease: "power1.inOut",
  });
  gsap.from(".thirdPara", {
    duration: 1.2,
    x: -400,
    ease: "power1.inOut",
  });

  gsap.from(".bannerStext", {
    duration: 1.2,
    x: -400,
    ease: "power1.inOut",
  });
}
