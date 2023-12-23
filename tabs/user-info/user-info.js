const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton');
const formInputs = document.querySelectorAll('#editForm user-info-input');
const profilePic = document.querySelector('img');
const uploadInput = document.getElementById('upload');
let creditCard = document.getElementById('creditCard');
let phone = document.getElementById('phone');

creditCard.addEventListener('user-info-input', function (event) {
  let input = event.target.value.replace(/\s/g, '');
  input = input.replace(/(.{4})/g, '$1 ').trim();
  event.target.value = input;
});

phone.addEventListener('user-info-input', function (event) {
  let input = event.target.value.replace(/\D/g, '');

  if (input.length > 3) {
    input = input.slice(0, 3) + '/' + input.slice(3);
  }
  if (input.length > 7) {
    input = input.slice(0, 7) + '-' + input.slice(7);
  }

  event.target.value = input;
});

function toggleEdit() {
  formInputs.forEach(input => {
    input.disabled = !input.disabled;
  });
}

editButton.onclick = function () {
  editButton.innerHTML = editButton.innerHTML == 'Save User Info' ? 'Edit User Info' : 'Save User Info';
  toggleEdit();
}

profilePic.addEventListener('click', function () {
  uploadInput.click();
});

uploadInput.addEventListener('change', function () {
  const file = uploadInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

function validatePhone(input) {
  const inputValue = document.getElementById('phone').value.trim();
  const phonePattern = /^\d{3}\/\d{3}-\d{3}$/;
  const errorMessage = document.getElementById('errorPhone');
  if (inputValue === '') {
    document.getElementById("errorPhone").innerHTML = "This field is mandatory";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
  else if (phonePattern.test(input.value)) {
    document.getElementById("errorPhone").innerHTML = "";
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    document.getElementById("errorPhone").innerHTML = "Invalid phone format";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
}

function validateCreditCard(input) {
  const inputValue = document.getElementById('creditCard').value.trim();
  const cardPattern = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
  const errorMessage = document.getElementById('errorCard');
  if (inputValue === '') {
    document.getElementById("errorCard").innerHTML = "This field is mandatory";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
  else if (cardPattern.test(input.value)) {
    document.getElementById("errorCard").innerHTML = "";
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
  else {
    document.getElementById("errorCard").innerHTML = "Invalid card format";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
}

function validateEmail(input) {
  const inputValue = document.getElementById('email').value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorMessage = document.getElementById('errorEmail');
  if (inputValue === '') {
    document.getElementById("errorEmail").innerHTML = "This field is mandatory";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
  else if (emailPattern.test(input.value)) {
    document.getElementById("errorEmail").innerHTML = "";
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    document.getElementById("errorEmail").innerHTML = "Invalid email format";
    input.classList.add('invalid');
    input.classList.remove('valid');
    errorMessage.style.display = 'block';
  }
}