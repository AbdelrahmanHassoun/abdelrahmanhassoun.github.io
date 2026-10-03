// =========================================================
// ABDELRAHMAN HASSOUN — PERSONAL PORTFOLIO
// Main JavaScript
// =========================================================


/* =========================================================
   1. FOOTER YEAR
========================================================= */

const currentYear = new Date().getFullYear();

const footerYear = document.getElementById("currentYear");

if (footerYear) {
    footerYear.textContent = currentYear;
}


/* =========================================================
   2. MOBILE NAVIGATION
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.classList.toggle("active", isOpen);

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        document.body.classList.toggle(
            "menu-open",
            isOpen
        );

    });


    /* Close menu after clicking a navigation link */

    const mobileLinks = navLinks.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedMenuButton =
            menuToggle.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            menuToggle.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            document.body.classList.remove(
                "menu-open"
            );

        }

    });

}


/* =========================================================
   3. SMOOTH SCROLLING
========================================================= */

const navigationLinks =
    document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        const targetId =
            link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

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


/* =========================================================
   4. NAVBAR SCROLL STATE
========================================================= */

const navbar =
    document.getElementById("navbar");

function updateNavbar() {

    if (!navbar) {
        return;
    }

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   5. REVEAL ANIMATIONS
========================================================= */

const revealElements =
    document.querySelectorAll(
        `
        .section-heading,
        .fact-card,
        .experience-card,
        .experience-highlight,
        .language-showcase,
        .ai-visual-section,
        .project-card,
        .leadership-card,
        .certificate,
        .linkedin-card,
        .education-card,
        .aspire-note
        `
    );


if ("IntersectionObserver" in window) {

    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "is-visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );


    revealElements.forEach((element) => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    /*
       Fallback for browsers without
       IntersectionObserver.
    */

    revealElements.forEach((element) => {

        element.classList.add("is-visible");

    });

}


/* =========================================================
   6. ESC KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            navLinks.classList.remove("active");

            if (menuToggle) {

                menuToggle.classList.remove(
                    "active"
                );

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

            document.body.classList.remove(
                "menu-open"
            );

        }

    }
);


/* =========================================================
   7. CONSOLE MESSAGE
========================================================= */

console.log(
    `Abdelrahman Hassoun Portfolio — ${currentYear}`
);
