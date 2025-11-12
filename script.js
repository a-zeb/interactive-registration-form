const storedUsername = "";
try {
  storedUsername = localStorage.getItem("username");
} catch {
  //   console.log("no stored username");
}

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

//add event listeners
regForm.addEventListener("submit", submit);

usernameInp.addEventListener("keyup", (e) => {
  usernameInp.reportValidity();
});

emailInp.addEventListener("keyup", (e) => {
  emailInp.reportValidity();
});
passwordInp.addEventListener("keyup", (e) => {
  passwordInp.reportValidity();
  if (
    passwordInp.value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
  ) {
    console.log("passwordInp matches req");
  } else if (passwordInp.value !== confirmPasswordInp.value) {
    console.log("Passwords do not match");
    confirmPasswordInp.setCustomValidity("Passwords do not match");
    confirmPasswordErrorTag.textContent = "Passwords do not match";
  } else if (passwordInp.value === confirmPasswordInp.value) {
    confirmPasswordInp.setCustomValidity("");
    confirmPasswordErrorTag.textContent = "";
  } else {
    confirmPasswordInp.setCustomValidity("Password does not meet requirements");
    console.log("passwordInp doesnt match req");
  }
});
confirmPasswordInp.addEventListener("keyup", (e) => {
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
  regForm.reportValidity();
  console.log("form valid: " + regForm.reportValidity());
  storedUsername = localStorage.setItem("username", usernameInp.value);
}
