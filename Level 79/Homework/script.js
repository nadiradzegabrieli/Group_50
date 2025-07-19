document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


const countrySelect = document.getElementById("country-select");
const countryInfo = document.getElementById("country-info");

countrySelect.addEventListener("change", (event) => {
  const country = event.target.value;
  let info = "";

  switch (country) {
    case "georgia":
      info = "Georgia is famous for its wine, mountains, and kind people 🍷⛰️";
      break;
    case "japan":
      info = "Japan offers cherry blossoms, sushi, and futuristic cities 🌸🍣";
      break;
    case "france":
      info = "France is known for its romance, art, and delicious cuisine 🗼🥐";
      break;
    default:
      info = "";
  }

  countryInfo.textContent = info;
});

document.getElementById("check-weather").addEventListener("click", () => {
  const city = document.getElementById("city").value.trim();
  const weatherResult = document.getElementById("weather-result");

  if (city === "") {
    weatherResult.textContent = "Please enter a city 🌆";
    return;
  }


  weatherResult.textContent = `Loading weather for ${city}... (API integration coming soon!)`;
});