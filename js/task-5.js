// Task-5

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const color = document.querySelector(".color");



button.addEventListener("click", () => { 
  color.textContent = getRandomHexColor();
  document.body.style.backgroundColor = color.textContent;
  document.querySelector(".widget").firstElementChild.style.color = "white"; // kolay okunsun diye ekledim. 
});