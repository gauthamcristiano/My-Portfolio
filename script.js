/* =========================================================
   GAUTHAM PORTFOLIO
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   01. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");


if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   02. NAVBAR SCROLL EFFECT
   ========================================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.style.background = "rgba(6, 16, 22, 0.94)";
        navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.09)";

    } else {

        navbar.style.background = "rgba(6, 16, 22, 0.78)";
        navbar.style.borderBottomColor = "rgba(255, 255, 255, 0.05)";

    }

});


/* =========================================================
   03. SCROLL REVEAL ANIMATION
   ========================================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-grid, .stats-grid, .skill-card, .project-card, .timeline-item, .achievement-card, .resume-container, .contact-wrapper"
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(35px)";
    element.style.transition =
        "opacity 0.8s ease, transform 0.8s ease";

});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   04. STAGGERED CARD ANIMATION
   ========================================================= */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 100}ms`;

});


const achievementCards =
    document.querySelectorAll(".achievement-card");

achievementCards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 120}ms`;

});


/* =========================================================
   05. PROJECT HOVER TILT
   ========================================================= */

const projectImages =
    document.querySelectorAll(".project-image");


projectImages.forEach(card => {

    card.addEventListener("mousemove", (event) => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================================================
   06. HERO PARALLAX
   ========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

    if (!heroVisual) return;

    const x =
        (event.clientX / window.innerWidth - 0.5);

    const y =
        (event.clientY / window.innerHeight - 0.5);

    heroVisual.style.transform =
        `translate(${x * 12}px, ${y * 12}px)`;

});


/* =========================================================
   07. ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
    document.querySelectorAll("section[id]");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================================================
   08. SMOOTH INTERNAL LINKS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (targetId === "#") return;

        const target =
            document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   09. MAGNETIC BUTTON EFFECT
   ========================================================= */

const magneticButtons =
    document.querySelectorAll(".btn, .nav-button");


magneticButtons.forEach(button => {

    button.addEventListener("mousemove", event => {

        const rect =
            button.getBoundingClientRect();

        const x =
            event.clientX - rect.left - rect.width / 2;

        const y =
            event.clientY - rect.top - rect.height / 2;

        button.style.transform =
            `translate(${x * 0.08}px, ${y * 0.08}px)`;

    });


    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translate(0, 0)";

    });

});


/* =========================================================
   10. YEAR AUTO UPDATE
   ========================================================= */

const footerText =
    document.querySelector(".footer p");

if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Gautham. Built with curiosity & code.`;

}


/* =========================================================
   11. TYPING EFFECT
   ========================================================= */

const heroLabel =
    document.querySelector(".hero-label");


if (heroLabel) {

    const originalText =
        heroLabel.textContent.trim();

    heroLabel.textContent = "";

    let characterIndex = 0;


    function typeLabel() {

        if (characterIndex < originalText.length) {

            heroLabel.textContent +=
                originalText.charAt(characterIndex);

            characterIndex++;

            setTimeout(typeLabel, 45);

        }

    }


    setTimeout(typeLabel, 700);

}


/* =========================================================
   12. MOUSE GLOW
   ========================================================= */

const glow =
    document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);


const glowStyle =
    document.createElement("style");

glowStyle.textContent = `

    .mouse-glow {

        position: fixed;

        width: 250px;
        height: 250px;

        border-radius: 50%;

        pointer-events: none;

        z-index: 0;

        background:
            radial-gradient(
                circle,
                rgba(0, 199, 183, 0.07),
                transparent 65%
            );

        transform:
            translate(-50%, -50%);

        transition:
            left 0.15s ease,
            top 0.15s ease;

    }

    .nav-menu a.active {

        color: #00c7b7;

    }

    @media (max-width: 760px) {

        .mouse-glow {

            display: none;

        }

    }

`;

document.head.appendChild(glowStyle);


document.addEventListener("mousemove", event => {

    glow.style.left =
        `${event.clientX}px`;

    glow.style.top =
        `${event.clientY}px`;

});


/* =========================================================
   13. REDUCE MOTION SUPPORT
   ========================================================= */

const prefersReducedMotion =
    window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );


if (prefersReducedMotion.matches) {

    document.documentElement.style.scrollBehavior =
        "auto";

}


/* =========================================================
   14. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "%cGAUTHAM PORTFOLIO",
    "font-size: 20px; font-weight: bold;"
);

console.log(
    "%cBuilt with HTML, CSS & JavaScript 🚀",
    "font-size: 13px;"
);
