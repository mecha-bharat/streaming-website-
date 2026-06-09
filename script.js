// Navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Row slider arrows
const leftArrows = document.querySelectorAll(".arrow-left");
const rightArrows = document.querySelectorAll(".arrow-right");
const rows = document.querySelectorAll(".row-container");

leftArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        rows[index].scrollBy({
            left: -400,
            behavior: "smooth"
        });
    });
});

rightArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        rows[index].scrollBy({
            left: 400,
            behavior: "smooth"
        });
    });
});

// Card hover overlay
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    const overlay = card.querySelector(".card-overlay");

    if (overlay) {
        card.addEventListener("mouseenter", () => {
            overlay.classList.add("show");
        });

        card.addEventListener("mouseleave", () => {
            overlay.classList.remove("show");
        });
    }
});