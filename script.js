// script.js
function toggleMode() {
  document.body.classList.toggle('dark-mode');
  const toggleButton = document.querySelector('.mode-toggle');
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '☀️';
  } else {
    toggleButton.textContent = '🌙';
  }
}

