// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  console.log("Zoelio landing page is ready!");

  // Hamburger Menu Toggle for Mobile
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector("nav");

  if (hamburgerMenu && nav) {
    hamburgerMenu.addEventListener("click", function() {
      nav.classList.toggle("active");
    });
  }
});