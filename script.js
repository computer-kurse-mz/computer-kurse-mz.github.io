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

// Playback-Rate des Videos
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.bg-video');
  if (video) {
    video.playbackRate = 0.3; // 0.5 = halb so schnell, 1 = normal
  }
});
