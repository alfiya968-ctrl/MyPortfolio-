const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

function showError(id, message) {
    document.getElementById(id + "Error").textContent = message;
}

function clearErrors() {
    ["name", "email", "message"].forEach(id => showError(id, ""));
    formMessage.textContent = "";
    formMessage.className = "form-message";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let valid = true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        showError("name", "Please enter your name.");
        valid = false;
    }

    if (email === "") {
        showError("email", "Please enter your email.");
        valid = false;
    } else if (!emailPattern.test(email)) {
        showError("email", "Please enter a valid email address.");
        valid = false;
    }

    if (message === "") {
        showError("message", "Please enter a message.");
        valid = false;
    } else if (message.length < 10) {
        showError("message", "Message should contain at least 10 characters.");
        valid = false;
    }

    if (valid) {
        formMessage.textContent = `Thank you, ${name}! Your message has been submitted successfully.`;
        formMessage.className = "form-message success";
        form.reset();
    } else {
        formMessage.textContent = "Please correct the highlighted fields and try again.";
        formMessage.className = "form-message fail";
    }
});
