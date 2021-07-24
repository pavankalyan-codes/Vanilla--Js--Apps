window.onload = function () {
  var form = document.querySelector("form");
  form.onsubmit = submitted.bind(form);
};

function submitted(event) {
  event.preventDefault();

  let valid1 = false;
  let valid2 = false;
  let valid3 = false;
  let valid4 = true;
  if (checkEmail() === "yes") {
    valid1 = true;
  }
  if (checkPassword() === "yes") {
    valid2 = true;
  }

  if (document.getElementById("confirmPass").classList.contains("hide")) {
    valid3 = true;
  } else {
    if (validateCPassword() === "yes") {
      valid3 = true;
    } else {
      valid3 = false;
    }

    if (validateTc() === "yes") {
      valid4 = true;
    } else {
      valid4 = false;
    }
  }

  if (valid1 && valid2 && valid3 && valid4) {
    alert("success");
  }
}

function validateTc() {
  if (document.getElementById("tc").checked) {
    document.getElementById("tclabel").classList.remove("is-invalid");
    return "yes";
  } else {
    document.getElementById("tclabel").classList.add("is-invalid");
    return "no";
  }
}

function validateEmail() {
  checkEmail();
}

function validatePassword() {
  checkPassword();
}

function validateCPassword() {
  let cpassword = document.getElementById("cpassword").value;
  let password = document.getElementById("password").value;
  if (cpassword !== password || password === "" || cpassword === "") {
    document.getElementById("password").classList.add("is-invalid");
    document.getElementById("cpassword").classList.add("is-invalid");
    return "no";
  } else {
    document.getElementById("password").classList.remove("is-invalid");
    document.getElementById("cpassword").classList.remove("is-invalid");
    return "yes";
  }
}

function checkCPassword() { }

function checkEmail() {
  let mail = document.getElementById("email").value;
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      mail
    )
  ) {
    document.getElementById("email").classList.remove("is-invalid");

    return "yes";
  }
  document.getElementById("email").classList.add("is-invalid");
}
function checkPassword() {
  let password = document.getElementById("password").value;

  if (password !== "" && password.trim() !== "") {
    document.getElementById("password").classList.remove("is-invalid");

    return "yes";
  }

  document.getElementById("password").classList.add("is-invalid");
}

function signin() {
  document.getElementById("header-title").textContent = "SignIn";
  document.getElementById("confirmPass").classList.add("hide");
  document.getElementById("signin-click").classList.add("hide");
  document.getElementById("signup-click").classList.remove("hide");
  document.getElementById("btn1").textContent = "SignIn";
  makeInputsValid();
}

function signup() {
  document.getElementById("header-title").textContent = "SignUp";
  document.getElementById("btn1").textContent = "SignUp";
  document.getElementById("confirmPass").classList.remove("hide");
  document.getElementById("signup-click").classList.add("hide");
  document.getElementById("signin-click").classList.remove("hide");
  makeInputsValid();
}

function listenSignup() {
  alert("signup successfull");
}

function listenSignin() {
  alert("signin successfull");
}

function makeInputsValid() {
  var el = document.getElementsByTagName("input");
  for (let i = 0; i < el.length; i++) {
    if (el[i].classList.contains("is-invalid")) {
      el[i].classList.remove("is-invalid");
    }
  }
  let chkbox = document.getElementById("tclabel");
  if (chkbox.classList.contains("is-invalid")) {
    chkbox.classList.remove("is-invalid");
  }
}
