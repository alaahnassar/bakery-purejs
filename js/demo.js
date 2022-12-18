
//------------------counter--------------
clickCounter();
localStorage.clickcount = Number(localStorage.clickcount) - 1;
document.getElementById("count").innerHTML = localStorage.clickcount;
function clickCounter() {
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById("count").innerHTML = localStorage.clickcount;
}

let addTo = document.getElementsByClassName("add");
for (let i = 0; i < addTo.length; i++) {
    addTo[i].addEventListener("click", clickCounter);
}
//--------------slider-------------------------
var index = 0;
var sliders = document.getElementsByClassName("mySlides");

function showSlider(direction) {
    if (direction == "next") {
        index++;
        if (index == sliders.length) {
            index = 0;
        }
    } else {
        if (index == 0) {
            index = sliders.length - 1;
        } else {
            index--;
        }
    }
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].classList.remove('main');
    }
    sliders[index].classList.add('main');
}
//----------filter----------

var all = document.querySelectorAll(".filterDiv");
var arr = [];
all.forEach((item) => { arr.push(item); });
var result;
function filterSelection(product) {
    result = arr.filter((item) => {
        if (product == "all") {
            item.style.display = "block";
        } else if (product == "filterDiv") {

            item.style.display = "none";
            if (item.classList.contains("filterDiv")) {
                item.style.display = "block";
            }
        } else if (product == "cake") {


            item.style.display = "none";
            if (item.classList.contains("cake")) {
                item.style.display = "block";

            }
        }
        else if (product == "donats") {
            item.style.display = "none";
            if (item.classList.contains("donats")) {
                item.style.display = "block";

            }
        }
        else if (product == "cupCakes") {
            item.style.display = "none";
            if (item.classList.contains("cupCakes")) {
                item.style.display = "block";

            }
        }
        else if (product == "Macarons") {
            item.style.display = "none";
            if (item.classList.contains("Macarons")) {
                item.style.display = "block";
            }
        }
    });
}
//-------------- active ------------------
let btnContainer = document.getElementById("myBtnContainer");
let btnFilter = btnContainer.getElementsByClassName("btnFilter");
for (var i = 0; i < btnFilter.length; i++) {
    btnFilter[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
    });
}

//--------------scroll-------------------------
function scrollToTop() {
    window.scrollTo(0, 0);
}