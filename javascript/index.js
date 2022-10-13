console.clear();

const bodyElement = document.querySelector("body");
const textFarbenButton = document.querySelector('[data-js="textFarbenButton"');

textFarbenButton.addEventListener("click", () => {
  bodyElement.style.color = "white";
  bodyElement.classList.toggle("textcolor");
  bodyElement.classList.toggle("text-shadow");
  console.log("color changed");
  bodyElement;
});
