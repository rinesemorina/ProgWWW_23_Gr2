const container = document.getElementById('login-container');
const registerBtn = document.getElementById('login-register');
const loginBtn = document.getElementById('login-login');
const signinBtn = document.getElementById('login-sign-in-button');
const signupBtn = document.getElementById('login-sign-up-button');

registerBtn.addEventListener('click', () => {
    container.classList.add("login-active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("login-active");
});

signupBtn.onclick = () => {
    window.location.replace("http://127.0.0.1:5500/index.html");
    console.log('signin');
};
signinBtn.onclick = () => {
    location.href = "http://127.0.0.1:5500/index.html";
    console.log('signin');
};