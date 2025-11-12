//select DOM elements
const regForm = document.querySelector("form");

const usernameInp = document.getElementById("username");
const emailInp = document.getElementById("email");
const passwordInp = document.getElementById("password");
const confirmPasswordInp = document.getElementById("confirmPassword");

const usernameErrorTag = document.getElementById("usernameError");
const emailErrorTag = document.getElementById("emailError");
const passwordErrorTag = document.getElementById("passwordError");
const confirmPasswordErrorTag = document.getElementById("confirmPasswordError");

const registerButton = document.querySelector("button");

//try local storage
let storedUsername = "";
try {
  storedUsername = localStorage.getItem("username");
  usernameInp.value = storedUsername;
} catch (error) {
  console.log("error: " + error);
}

//add event listeners
regForm.addEventListener("submit", submit);

usernameInp.addEventListener("change", (e) => {
  usernameInp.reportValidity();
});

emailInp.addEventListener("change", (e) => {
  emailInp.reportValidity();
});

passwordInp.addEventListener("change", (e) => {
  passwordInp.reportValidity();
  //   if (
  //     passwordInp.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  //   ) {
  //     console.log("passwordInp matches req");
  //     passwordInp.setCustomValidity("")
  //   }
  //   if (
  //     !passwordInp.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  //   ) {
  //     confirmPasswordInp.setCustomValidity("Password does not meet requirements");
  //   }
  if (passwordInp.value !== confirmPasswordInp.value) {
    confirmPasswordInp.setCustomValidity("Passwords do not match");
    confirmPasswordErrorTag.textContent = "Passwords do not match";
  }
  if (passwordInp.value === confirmPasswordInp.value) {
    confirmPasswordInp.setCustomValidity("");
    confirmPasswordErrorTag.textContent = "";
  } else {
    confirmPasswordInp.setCustomValidity("Password does not meet requirements");
  }
});

confirmPasswordInp.addEventListener("change", (e) => {
  confirmPasswordInp.reportValidity();
  if (passwordInp.value !== confirmPasswordInp.value) {
    confirmPasswordInp.setCustomValidity("Passwords do not match");
    confirmPasswordErrorTag.textContent = "Passwords do not match";
  } else {
    confirmPasswordInp.setCustomValidity("");
    confirmPasswordErrorTag.textContent = "";
  }
});

registerButton.addEventListener("click", submit);

//create methods
function submit(e) {
  e.preventDefault();
  if (regForm.checkValidity() === true) {
    localStorage.setItem("username", usernameInp.value);
    storedUsername = JSON.stringify(localStorage.getItem("username"));
    window.alert("Successfully registered!");
  } else {
    window.alert();
  }
}
