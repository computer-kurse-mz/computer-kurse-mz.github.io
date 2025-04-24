function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

// Playback-Rate des Videos
document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.bg-video');
  if (video) {
    video.playbackRate = 0.6; // 0.5 = halb so schnell, 1 = normal
  }
});
