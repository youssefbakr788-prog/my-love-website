/* =========================
SMOOTH SCROLL
========================= */

function scrollToSection(id) {

const section = document.getElementById(id);

if (section) {

    section.scrollIntoView({
        behavior: "smooth"
    });

}

}

/* =========================
MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

}

document.querySelectorAll(".nav-links a").forEach(link => {

link.addEventListener("click", () => {

    navLinks.classList.remove("active");

});

});

/* =========================
SCROLL REVEAL
========================= */

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);

revealElements.forEach(element => {

revealObserver.observe(element);

});

/* =========================
FLOATING HEARTS
========================= */

const heartsContainer =
document.querySelector(".hearts-container");

function createHeart() {

const heart =
    document.createElement("div");

heart.classList.add("floating-heart");

heart.innerHTML =
    Math.random() > 0.5 ? "♥" : "♡";


const size =
    Math.random() * 18 + 8;

const left =
    Math.random() * 100;

const duration =
    Math.random() * 8 + 8;


heart.style.left = `${left}%`;

heart.style.fontSize = `${size}px`;

heart.style.animationDuration =
    `${duration}s`;


heartsContainer.appendChild(heart);


setTimeout(() => {

    heart.remove();

}, duration * 1000);

}

setInterval(createHeart, 1200);

/* =========================
SURPRISE MODAL
========================= */

const modal =
document.getElementById("surpriseModal");

function openSurprise() {

modal.classList.add("active");

document.body.style.overflow = "hidden";

}

function closeSurprise() {

modal.classList.remove("active");

document.body.style.overflow = "";

}

/* Close when clicking outside */

modal.addEventListener("click", (event) => {

if (event.target === modal) {

    closeSurprise();

}

});

/* Close with ESC */

document.addEventListener("keydown", (event) => {

if (event.key === "Escape") {

    closeSurprise();

}

});

/* =========================
IMAGE ERROR HANDLING
========================= */

document.querySelectorAll(".photo-card img")
.forEach(image => {

image.addEventListener("error", () => {

    image.style.display = "none";

    image.parentElement.style.background =
        "linear-gradient(135deg, #24151b, #100b0e)";

});

});

/* =========================
PARALLAX HERO
========================= */

window.addEventListener("scroll", () => {

const hero =
    document.querySelector(".hero-content");

const scroll =
    window.scrollY;


if (scroll < window.innerHeight) {

    hero.style.transform =
        `translateY(${scroll * 0.25}px)`;

    hero.style.opacity =
        1 - scroll / 700;

}

});
