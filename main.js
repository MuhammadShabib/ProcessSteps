const progress = document.getElementById("progress");
const perv = document.getElementById("perv");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
var curentActive = 1;
next.addEventListener("click", () => {
    curentActive++;
    if (curentActive > circles.length) {
        curentActive = circles.length
    }
    update()
})


perv.addEventListener("click", () => {
    curentActive--;
    if (curentActive < 1) {
        curentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, index) => {
        if (index < curentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    var activeCircles = document.querySelectorAll(".active");
    progress.style.width = (activeCircles.length - 1) / (circles.length - 1) * 100 + "%";


    if (curentActive === 1) {
        perv.disabled == true
    } else if (curentActive === circles.length) {
        next.disabled == true
    } else {
        perv.disabled == false;
        next.disabled == false;
        perv.di

    }
}