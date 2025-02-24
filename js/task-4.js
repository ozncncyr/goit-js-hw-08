// Task-4

const form = document.querySelector(".login-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const { email, password } = e.currentTarget.elements;
    email.value = email.value.trim();
    password.value = password.value.trim();
    if (email.value === "" || password.value === "") {
        return alert("All form fields must be filled in!");
    }
    const formData = {
        email: email.value,
        password: password.value,
    };
    console.log(formData);
    form.reset();
});