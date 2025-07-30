document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`)
    .then(res => res.json())
    .then(data => {
      if (!data.results || data.results.length === 0) {
        throw new Error("City not found");
      }
      const { latitude, longitude } = data.results[0];

      // Step 2: Fetch weather data
      return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    })
    .then(res => res.json())
    .then(weatherData => {
      const weather = weatherData.current_weather;
      document.getElementById("weatherResult").innerHTML = `
        🌍 Location: ${city}<br/>
        🌡 Temperature: ${weather.temperature}°C<br/>
        💨 Wind Speed: ${weather.windspeed} km/h<br/>
        ⏰ Time: ${weather.time}
      `;
    })
    .catch(err => {
      document.getElementById("weatherResult").textContent = `Error: ${err.message}`;
    });
});
