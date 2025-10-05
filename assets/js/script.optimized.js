'use strict';

// ---------- Utility Functions ----------
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// ---------- Sidebar ----------
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}

// ---------- Read More Toggle ----------
function toggleReadMore(event) {
  event.preventDefault();
  const moreText = event.target.previousElementSibling.querySelector(".more-text");
  const isVisible = moreText.style.display === "block";
  moreText.style.display = isVisible ? "none" : "block";
  event.target.textContent = isVisible ? "Read More" : "Read Less";
}
