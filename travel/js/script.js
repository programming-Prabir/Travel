const hamburgoricons = document.querySelector(".hamburgoricons");
const navBarRight = document.querySelector(".navBarRight");
hamburgoricons.addEventListener("click", function () {
    navBarRight.classList.toggle("show-navBarRight");
});