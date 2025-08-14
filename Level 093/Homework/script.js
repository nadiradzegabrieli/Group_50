    const targetTime = new Date();
    targetTime.setMinutes(targetTime.getMinutes() + 1); // countdown for 1 minute

    function updateTimer() {
      const now = new Date();
      const difference = targetTime - now;

      if (difference <= 0) {
        document.getElementById("timer").textContent = "Time's up!";
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor(difference / 1000 / 60);
      const seconds = Math.floor((difference / 1000) % 60);

      document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    const interval = setInterval(updateTimer, 1000);