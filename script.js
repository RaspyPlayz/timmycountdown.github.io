const targetDate = new Date("May 4, 2025 18:50:00").getTime();


const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance > 0) {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
  } else {
    clearInterval(countdown);

    // Set everything to 00 cleanly
    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    // Show the modal
    const modal = document.getElementById("timmyModal");
    modal.style.display = "flex";

    // Play the MP3
    const song = document.getElementById("timmySong");
    song.play();
  }
}, 1000);



//pause and play
const playPauseBtn = document.getElementById("playPauseBtn");
const audio = document.getElementById("timmySong");

playPauseBtn.addEventListener("click", function() {
  if (audio.paused) {
    // Play the audio
    audio.play();
    playPauseBtn.innerText = "Pause";
  } else {
    // Pause the audio
    audio.pause();
    playPauseBtn.innerText = "Play";
  }
});




//disable right click
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
 });

 



 //disable developer tools
 document.addEventListener('keydown', (e) => {
  // Block F12
  if (e.key === 'F12') {
    e.preventDefault();
  }

  // Block Ctrl+Shift+I, Ctrl+Shift+J
  if (e.ctrlKey && e.shiftKey && (e.key.toLowerCase() === 'i' || e.key.toLowerCase() === 'j')) {
    e.preventDefault();
  }

  // Block Ctrl+U (View Source)
  if (e.ctrlKey && e.key.toLowerCase() === 'u') {
    e.preventDefault();
  }
});



const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');

  if (document.body.classList.contains('light-mode')) {
    toggleButton.textContent = 'Dark Mode';
  } else {
    toggleButton.textContent = 'Light Mode';
  }
});




