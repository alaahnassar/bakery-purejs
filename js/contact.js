//form
let userName = document.getElementById("name");
let errName = document.getElementById("errname");
let email = document.getElementById("Email");;
let errEmail = document.getElementById("erremail");
let phone = document.getElementById("phone");;
let errPhone = document.getElementById("errphone");
let submit = document.getElementById("submit");

function nameValidate() {
    if (userName.value.length >= 5 && !Number(userName.value) && /\S/.test(userName.value)) {
        userName.style.border = "2px green solid";
        errName.style.display = "none";
        return true;
    } else {
        userName.style.border = "2px red solid";
        errName.style.display = "block";
    }
}
userName.addEventListener("input", nameValidate);

let mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
function emailValidate() {
    if (email.value.match(mailformat)) {
        email.style.border = "2px green solid";
        errEmail.style.display = "none";
        return true;
    } else {
        email.style.border = "2px red solid";
        errEmail.style.display = "block";

    }
}
email.addEventListener("input", emailValidate);

var phoneformat = /^01[012][0-9]{8}$/;
function phoneValidate() {
    if (phone.value.match(phoneformat)) {
        phone.style.border = "2px solid green";
        errPhone.style.display = "none";
        return true;
    } else {
        phone.style.border = "2px solid red";
        errPhone.style.display = "block";
    }
}
phone.addEventListener("input", phoneValidate);

function goToHome() {
    window.open("index.html", "_self");
}
function validation(e) {
    e.preventDefault();
    if (nameValidate() && emailValidate() && phoneValidate()) {
        goToHome();
    } else {
        alert("Please check your Data!");
    }
}