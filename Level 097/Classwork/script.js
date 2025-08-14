function changeColor(color) {
  document.getElementById("watchImage").src = `${color}.png`;
}

function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("clock").textContent = timeStr;
}
setInterval(updateClock, 1000);


function simulateHeartRate() {
  const bpm = Math.floor(Math.random() * 40) + 60;
  document.getElementById("heart").textContent = bpm + " bpm";
}
setInterval(simulateHeartRate, 3000);