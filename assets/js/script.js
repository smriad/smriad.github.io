'use strict';

// ---------- Utility Functions ----------

// Element toggle function
const elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
};

// ---------- Sidebar ----------

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Toggle sidebar on mobile
sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));

// ---------- Contact Form ----------

const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Enable/disable submit button based on form validity
formInputs.forEach(input => {
  input.addEventListener("input", () => {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// ---------- Page Navigation ----------

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    pages.forEach((page, pIdx) => {
      if (link.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[pIdx].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[pIdx].classList.remove("active");
      }
    });
  });
});

// ---------- Read More Toggle ----------

function toggleReadMore(event) {
  event.preventDefault();
  const moreText = event.target.previousElementSibling.querySelector(".more-text");
  const isVisible = moreText.style.display === "block";
  moreText.style.display = isVisible ? "none" : "block";
  event.target.textContent = isVisible ? "Read More" : "Read Less";
}

// ---------- PDF Viewer ----------

function openPdf(pdfUrl) {
  const viewer = document.getElementById("pdf-viewer");
  if (viewer) viewer.src = pdfUrl;
}
