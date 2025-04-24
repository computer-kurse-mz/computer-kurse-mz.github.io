document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mode-toggle');
  const video = document.querySelector('.bg-video');

  // Initialer Zustand
  const savedMode = localStorage.getItem('mode');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedMode === 'dark' || (!savedMode && prefersDark)) {
    document.body.classList.add('dark-mode');
  }

  // Toggle
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('mode', isDark ? 'dark' : 'light');
  });

  // Playback-Rate
  if (video) {
    video.playbackRate = 0.4; // oder 0.6 je nach Geschmack
  }
});