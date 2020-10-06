// mobile menu dropdown
const mobileMenuButton = document.querySelector(".mobile-menu");
const mobileMenu = document.querySelector(".nav-links");
const mobileMenuLinks = document.querySelectorAll(".nav-links li");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

