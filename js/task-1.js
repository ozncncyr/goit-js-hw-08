// Task-1

const categoryNum = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryNum.length}`);

const categoryInfo = categoryNum.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}`);
});