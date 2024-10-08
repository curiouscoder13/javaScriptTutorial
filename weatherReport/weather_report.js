function showWeatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const apiKey = "e2aaac84c7a0aacf4aa0ef40dbd655c6";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showWeatherDetails);

function showWeatherDetailsByCoordinates(event) {
  event.preventDefault();

  const longitude = document.getElementById("longitude").value;
  const latitude = document.getElementById("latitude").value;
  const apiKey = "e2aaac84c7a0aacf4aa0ef40dbd655c6";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherInfoByCoordinates = document.getElementById(
        "weatherInfoByCoordinates"
      );
      weatherInfoByCoordinates.innerHTML = `<h2>Weather in: ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfoByCoordinates = document.getElementById(
        "weatherInfoByCoordinates"
      );
      weatherInfoByCoordinates.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}

document
  .getElementById("weatherFormCoordinates")
  .addEventListener("submit", showWeatherDetailsByCoordinates);
