// Task-3

const output = document.getElementById("name-output");
const input = document.getElementById("name-input");

input.addEventListener("input", (e) => { 
    e.preventDefault();
    const inputText = e.currentTarget.value.trim();
    if (inputText !== "") {
        output.textContent = inputText;
    } else {
        output.textContent = "Anonymous";
    }
});