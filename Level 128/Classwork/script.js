function getWeather() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("snow"); // ან ნებისმიერი სხვა მონაცემი
    }, 1000);
  });
}

getWeather().then(weather => {
  if (weather === "snow") {
    console.log("❄️ It’s snowing!");
  } else {
    console.log("🌤️ Weather is:", weather);
  }
});

