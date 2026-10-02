// =========================================================
// ABDELRAHMAN HASSOUN — PERSONAL PORTFOLIO
// Main JavaScript
// =========================================================


// =========================================================
// 1. UPDATE FOOTER YEAR
// =========================================================

const currentYear = new Date().getFullYear();

const footerYear = document.querySelector(".footer-content p");

if (footerYear) {
    footerYear.textContent = `© ${currentYear} Abdelrahman Hassoun`;
}


// =========================================================
// 2. SMOOTH SCROLLING
// =========================================================

const navigationLinks = document.querySelectorAll(
    'a[href^="#"]'
);

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// =========================================================
// 3. NAVBAR SCROLL STATE
// =========================================================

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 30) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


// =========================================================
// 4. REVEAL ELEMENTS WHEN THEY ENTER THE VIEWPORT
// =========================================================

const revealElements = document.querySelectorAll(
    ".section-heading, .fact-card, .experience-card, .project-card, .certificate, .education-card"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// =========================================================
// 5. CURRENT YEAR LOG
// =========================================================

console.log(
    `Abdelrahman Hassoun Portfolio — ${currentYear}`
);
