
const typingElement = document.querySelector(".typing");

const roles = [
    "Python Backend Developer",
    "FastAPI Developer",
    "REST API Developer",
    "Flask Developer",
    "Backend Engineer",
    "Database Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

/* ==========================================
   MOBILE MENU
========================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close menu when clicking navigation link */

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* ==========================================
   STICKY NAVBAR EFFECT
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background =
            "rgba(0,0,0,0.8)";

        navbar.style.backdropFilter =
            "blur(15px)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        navbar.style.background =
            "rgba(0,0,0,0.3)";

        navbar.style.boxShadow =
            "none";
    }

});

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .education-card, .glass-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {

            element.classList.add("active");

        }
    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   ADD REVEAL CLASS AUTOMATICALLY
========================================== */

revealElements.forEach(element => {

    element.classList.add("reveal");

});

/* ==========================================
   ACTIVE NAVIGATION HIGHLIGHT
========================================== */

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active-link");

        }

    });

});

/* ==========================================
   HERO BUTTON RIPPLE EFFECT
========================================== */

const buttons =
document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px) scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px) scale(1)";

    });

});

/* ==========================================
   PROJECT CARD HOVER GLOW
========================================== */

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
            rgba(0,245,255,0.15),
            rgba(255,255,255,0.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
            "rgba(255,255,255,0.05)";

    });

});

/* ==========================================
   SKILL CARD ANIMATION
========================================== */

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px) rotate(2deg)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px) rotate(0deg)";

    });

});

/* ==========================================
   CONTACT FORM
========================================== */

const contactForm =
document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            const name =
                this.querySelector(
                    'input[name="name"]'
                ).value.trim();

            const email =
                this.querySelector(
                    'input[name="email"]'
                ).value.trim();

            const message =
                this.querySelector(
                    'textarea[name="message"]'
                ).value.trim();

            if (name === "" || email === "" || message === "") {

                alert(
                    "Please fill in all fields before sending your message."
                );

                return;
            }

            const subject = encodeURIComponent(
                `Contact request from ${name}`
            );

            const body = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            );

            const mailtoLink =
                `mailto:kamalesh302003@gmail.com?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            alert(
                "Your email client should open to send the message."
            );

            this.reset();

        }
    );

}

/* ==========================================
   COUNTER ANIMATION (OPTIONAL)
========================================== */

function animateValue(
    element,
    start,
    end,
    duration
) {

    let startTime = null;

    function animation(currentTime) {

        if (!startTime)
            startTime = currentTime;

        const progress =
            Math.min(
                (currentTime - startTime) /
                duration,
                1
            );

        element.textContent =
            Math.floor(
                progress * (end - start) +
                start
            );

        if (progress < 1) {

            requestAnimationFrame(
                animation
            );

        }

    }

    requestAnimationFrame(animation);

}

/* ==========================================
   PRELOADER SUPPORT (OPTIONAL)
========================================== */

window.addEventListener("load", () => {

    document.body.classList.add(
        "loaded"
    );

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(`
====================================
 Portfolio Developed By
 Kamalesh Chandrasekaran
 Python Backend Developer
 FastAPI Developer
====================================
`);

