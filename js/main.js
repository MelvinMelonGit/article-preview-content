const arrow = document.querySelector(".arrow");
const share = document.querySelector(".share");

arrow.addEventListener("click", () => {
    arrow.classList.toggle("active");
    share.classList.toggle("appear");
})