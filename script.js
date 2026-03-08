const apiKey = API_KEY;
const apiUrl = "https://api.weatherapi.com/v1/current.json?aqi=no&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector("#search-btn");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&key=${apiKey}`);
  const data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.location.name;

  document.querySelector(".temp").innerHTML =
    Math.round(data.current.temp_c) + "°C";

  document.querySelector(".humidity").innerHTML = data.current.humidity + "%";

  document.querySelector(".wind").innerHTML =
    Math.round(data.current.wind_kph) + " km/h";

  const weatherCondition = data.current.condition.text;

  if (weatherCondition === "Clear") {
    weatherIcon.src = "./clear.png";
  } else if (weatherCondition === "Sunny") {
    weatherIcon.src = "./clear.png";
  } else if (weatherCondition === "Cloudy") {
    weatherIcon.src = "./clouds.png";
  } else if (weatherCondition === "Partly cloudy") {
    weatherIcon.src = "./clouds.png";
  } else if (weatherCondition === "Rain") {
    weatherIcon.src = "./rain.png";
  } else if (weatherCondition === "Drizzle") {
    weatherIcon.src = "./drizzle.png";
  } else if (weatherCondition === "Mist") {
    weatherIcon.src = "./mist.png";
  }

  document.querySelector(".weather").style.display = "block";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
