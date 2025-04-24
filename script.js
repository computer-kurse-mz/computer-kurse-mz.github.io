document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mode-toggle');
  const video = document.querySelector('.bg-video');

  const savedMode = localStorage.getItem('mode');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedMode === 'dark' || (!savedMode && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  });

  if (video) {
    video.playbackRate = 0.4;
  }
});

// Burger-Menü
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('open');
}