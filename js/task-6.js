// Task-6

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = [];
console.log(`Number of Boxes: ${boxes.length}`);

const createBoxes = amount => {
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  console.clear();
  console.log(`Number of Boxes: ${boxes.length}`);
  return boxes;
};

const destroyBoxes = () => {
  boxes.forEach(box => {
    box.remove();
  });
  boxes.length = 0;
  console.clear();
  console.log(`Number of Boxes: ${boxes.length}`);
};

createBtn.addEventListener("click", () => {
  destroyBoxes();
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount).forEach(box => {
    document.querySelector("#boxes").append(box);
  });
  } else {
      alert("Please enter a number between 1 and 100");
    }
  input.value = "";
}
);

destroyBtn.addEventListener("click", destroyBoxes);

const boxPanel = document.querySelector("#boxes");
boxPanel.style.display = "flex";
boxPanel.style.flexWrap = "wrap";


