// script.js

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Button click animation
document.querySelectorAll(".btn, .hero-btn").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 200);
  });
});

// Optional: Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

const darkToggleBtn = document.createElement("button");
darkToggleBtn.innerText = "🌓";
darkToggleBtn.className = "btn";
darkToggleBtn.style.position = "fixed";
darkToggleBtn.style.bottom = "20px";
darkToggleBtn.style.right = "20px";
darkToggleBtn.style.zIndex = "999";
darkToggleBtn.title = "Toggle Dark Mode";

darkToggleBtn.addEventListener("click", toggleDarkMode);
document.body.appendChild(darkToggleBtn);

// Dark Mode Styles
const style = document.createElement("style");
style.innerHTML = `
.dark-mode {
  background: #121212;
  color: #d71e1e;
}
.dark-mode .navbar,
.dark-mode .card,
.dark-mode .footer {
  background: #1e1e1e !important;
}
.dark-mode a,
.dark-mode .footer-col a {
  color: #ddd;
}
.dark-mode .btn,
.dark-mode .hero-btn {
  background: #f97316;
  color: #fff;
}
`;
document.head.appendChild(style);


  function sendMail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:roohwear.india@gmail.com?subject=${subject}&body=${body}`;
    return false;
  }
