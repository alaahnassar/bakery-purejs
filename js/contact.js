let userName = document.getElementById("name");
let errName = document.getElementById("errname");
let email = document.getElementById("Email");;
let errEmail = document.getElementById("erremail");
let phone = document.getElementById("phone");;
let errPhone = document.getElementById("errphone");

userName.addEventListener("input", function (e) {
    if (e.target.value.length < 5) {
        e.target.style.border = "2px red solid";
        errName.style.display = "block";
    } else {
        e.target.style.border = "2px green solid";
        errName.style.display = "none";
    }
});

let mailformat =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
email.addEventListener("input", function (e) {
    if (e.target.value.match(mailformat)) {
        e.target.style.border = "2px green solid";
        errEmail.style.display = "none";
    } else {
        e.target.style.border = "2px red solid";
        errEmail.style.display = "block";
    }
});

var phoneformat = /^01[012][0-9]{8}$/;
phone.addEventListener("input", function (e) {
    if (e.target.value.match(phoneformat)) {
        e.target.style.border = "2px solid green";
        errPhone.style.display = "none";
    } else {
        e.target.style.border = "2px solid red";
        errPhone.style.display = "block";
    }
})