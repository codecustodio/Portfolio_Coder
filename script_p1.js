// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });
}

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");
        const target = targetId ? document.querySelector(targetId) : null;

        if (target) {
            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Contact form validation
const form = document.getElementById("contact-form");
const formMessage = document.getElementById("form-messgae");

if (form && formMessage) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMesaage.textContent = "Please fill in all fields";
            formMessage.className = "form-message error";
            return;
        }

        formMessage.textContent = "Message sent successfully.";
        formMessage.classname = "form-message success";
        form.requestFullscreen();
    });
}

// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");

console.log(toggleBtn)
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Project Filter
const filters = document.querySelectorAll("filter-btn");
filters.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Show/hide cards by category here
    });
});