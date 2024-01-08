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
    window.location.href = "https://www.youtube.com";
};
signinBtn.onclick = () => {
    window.location.href = "https://www.youtube.com";
    console.log('signin');
};