'use strict';
const elementToggleFunc = (elem) => elem.classList.toggle('active');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
if (sidebarBtn) sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));
function toggleReadMore(event) {
  event.preventDefault();
  const moreText = event.target.previousElementSibling.querySelector('.more-text');
  const isVisible = moreText.classList.contains('visible');
  if (isVisible) {
    moreText.classList.remove('visible');
    event.target.textContent = 'Read More';
  } else {
    moreText.classList.add('visible');
    event.target.textContent = 'Read Less';
  }
}