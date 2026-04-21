'use strict';
const elementToggleFunc = (elem) => elem.classList.toggle('active');
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');
if (sidebarBtn) sidebarBtn.addEventListener('click', () => elementToggleFunc(sidebar));

function toggleReadMore(event, trigger) {
  if (event && event.preventDefault) event.preventDefault();
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

// Delegated handler works for all current/future read-more links
document.addEventListener('click', function (event) {
  var trigger = event.target.closest('.read-more');
  if (!trigger) return;
  toggleReadMore(event, trigger);
});