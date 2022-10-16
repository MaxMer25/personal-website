console.clear();

const bodyElement = document.querySelector("body");
const textFarbenButton = document.querySelector('[data-js="textFarbenButton"');

textFarbenButton.addEventListener("click", () => {
  bodyElement.classList.toggle("textstyle");
  console.log("color changed");
});
