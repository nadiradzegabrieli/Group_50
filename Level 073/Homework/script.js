function startCountdown(targetDateStr) {
      const countdownEl = document.getElementById("countdown");
      const targetDate = new Date(targetDateStr);

      function update() {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          countdownEl.innerText = "🎊 Time's up!";
          clearInterval(timer);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);

        countdownEl.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
      }

      update(); // call immediately
      const timer = setInterval(update, 1000);
    }

    // შეცვალე თარიღი შენს საჭიროებაზე
    startCountdown("2025-12-31T00:00:00");

