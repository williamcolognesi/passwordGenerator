let elementSlider = document.querySelector("#slider");
let elementButton = document.querySelector("#button");
let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#password-container");

let charset =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*()";
let newPassword = "";

sizePassword.innerHTML = elementSlider.value;

elementSlider.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (var i = 0, n = charset.length; i < elementSlider.value; i++) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove("div-hide");
  password.innerHTML = pass;
  newPassword = pass;
}

function copyPassword() {
  alert("Senha copiada com sucesso!");
  navigator.clipboard.writeText(newPassword);
}
