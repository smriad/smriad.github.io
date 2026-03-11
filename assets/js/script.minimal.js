'use strict';
const elementToggleFunc = (elem) => elem.classList.toggle('active');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
if (sidebarBtn) sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));

function toggleReadMore(event) {
  if (event && event.preventDefault) {
    event.preventDefault();
  }

  const trigger = event && event.currentTarget ? event.currentTarget : null;
  if (!trigger) return;

  // Look for the corresponding .more-text inside the same service-content-box
  const container = trigger.closest('.service-content-box');
  if (!container) return;

  const moreText = container.querySelector('.more-text');
  if (!moreText) return;

  const isVisible = moreText.classList.contains('visible');

  if (isVisible) {
    moreText.classList.remove('visible');
    moreText.style.display = 'none';
    trigger.textContent = 'Read More';
  } else {
    moreText.classList.add('visible');
    moreText.style.display = 'inline';
    trigger.textContent = 'Read Less';
  }
}

// Attach click handlers once DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.read-more');
  links.forEach(function (link) {
    link.addEventListener('click', toggleReadMore);
  });
});