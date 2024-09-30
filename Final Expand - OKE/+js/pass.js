// Username dan password yang sudah ditentukan
const predefinedUsername = "admin";
const predefinedPassword = "password123";

function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validasi username dan password
    if (username === predefinedUsername && password === predefinedPassword) {
        window.location.href = "/nav/home.html";
    } else {
        alert('Username atau password salah!');
    }
}