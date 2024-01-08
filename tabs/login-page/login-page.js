const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signinBtn = document.getElementById('sign-in-button');
const signupBtn = document.getElementById('sign-up-button');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

signupBtn.onclick = () => {
    window.location.replace("http://127.0.0.1:5500/index.html");
};
signinBtn.onclick = () => {
    location.href = "http://127.0.0.1:5500/index.html";
    console.log('signin');
};