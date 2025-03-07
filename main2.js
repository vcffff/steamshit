const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const fullscreen = document.getElementById("fullscreen");

// Кнопка Play/Pause
playPause.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPause.textContent = "⏸";
    } else {
        video.pause();
        playPause.textContent = "▶";
    }
});

// Ползунок прогресса
video.addEventListener("timeupdate", () => {
    progress.value = (video.currentTime / video.duration) * 100;
});

progress.addEventListener("input", () => {
    video.currentTime = (progress.value / 100) * video.duration;
});

// Громкость
volume.addEventListener("input", () => {
    video.volume = volume.value;
});

// Полноэкранный режим
fullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        video.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});
