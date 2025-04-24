document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.mode-toggle');
  const video = document.querySelector('.bg-video');

  // Initialer Zustand
  const isDark = localStorage.getItem('theme') === 'dark';
  if (isDark) document.body.classList.add('dark-mode');

  // Toggle
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkNow = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkNow ? 'dark' : 'light');
  });

  // Playback-Rate
  if (video) {
    video.playbackRate = 0.4;
  }
});