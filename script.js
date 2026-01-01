document.getElementById("regForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let message = document.getElementById("message");

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        message.style.color = "red";
        message.innerText = "All fields are required!";
        return;
    }

    if (password !== confirmPassword) {
        message.style.color = "red";
        message.innerText = "Passwords do not match!";
        return;
    }

    message.style.color = "green";
    message.innerText = "Registration completed!";

});
