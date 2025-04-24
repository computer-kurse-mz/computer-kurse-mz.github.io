// Toggle Light/Dark Mode
function toggleMode() {
  const body = document.body;
  const button = document.querySelector('.mode-toggle');
  const isDark = body.classList.toggle('dark-mode');
  if (button) {
    button.setAttribute('aria-pressed', isDark);
  }
}

// Set video playback speed on load
document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.bg-video');
  if (video && 'playbackRate' in video) {
    video.playbackRate = 0.6;
  }

  // Optional: Dark mode preference from localStorage
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.body.classList.add('dark-mode');
    const button = document.querySelector('.mode-toggle');
    if (button) button.setAttribute('aria-pressed', true);
  }
});
