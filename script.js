/* 🔐 Unlock Screen */
function unlock() {
  const pass = document.getElementById("password").value;
  if (pass === "1107") { // CHANGE PASSWORD ❤️
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    alert("Wrong password 😛");
  }
}

/* 🎵 Music Control */
const music = document.getElementById("bgMusic");
let playing = false;

function toggleMusic() {
  if (!playing) {
    music.volume = 0.5;
    music.play();
    playing = true;
  } else {
    music.pause();
    playing = false;
  }
}

/* ▶️ Auto play music on first click */
document.body.addEventListener("click", () => {
  music.volume = 0.5;
  music.play().catch(() => {});
}, { once: true });

/* ⏳ Countdown Timer */
const startDate = new Date("2023-11-15"); // CHANGE DATE ❤️

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("timer").innerText =
    `${days} days, ${hours} hours, ${mins} minutes of us 💞`;
}

setInterval(updateTimer, 1000);
updateTimer();

/* ❤️ Floating Hearts */
document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.left = e.pageX + "px";
  heart.style.top = e.pageY + "px";
  heart.style.fontSize = "24px";
  heart.style.animation = "float 2s ease-out forwards";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 2000);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-100px); }
}`;
document.head.appendChild(style);
