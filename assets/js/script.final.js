elementToggleFunc = (elem) => {
  elem.classList.toggle("active");
}
elementToggleFunc(sidebar));
}
sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn) {
  sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
}
toggleReadMore(event) {
  event.preventDefault();
  const moreText = event.target.previousElementSibling.querySelector(".more-text");
  const isVisible = moreText.classList.contains("visible");
  
  if (isVisible) {
    moreText.classList.remove("visible");
    event.target.textContent = "Read More";
  }