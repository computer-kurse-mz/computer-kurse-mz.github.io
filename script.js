document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mode-toggle');
  const video = document.querySelector('.bg-video');

  // === Modus initial setzen (Light Mode = Default) ===
  const savedMode = localStorage.getItem('mode');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedMode === 'dark' || (!savedMode && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  // === Dark-/Light-Mode umschalten ===
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  });

  // === Video langsamer abspielen ===
  if (video) {
    video.playbackRate = 0.4; // Oder 0.6 je nach Geschmack
  }
});