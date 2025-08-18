async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const output = document.getElementById("weatherOutput");
  
    if (city === "") {
      output.innerHTML = "Please enter a city name.";
      return;
    }
  
    const apiKey = "911a24d3abb63db78a214bbc92fa28e2"
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  
    try {
      const response = await fetch(apiURL);
      if (!response.ok) {
        throw new Error("City not found");
      }
  
      const data = await response.json();
      const temperature = data.main.temp;
      const condition = data.weather[0].description;
      const humidity = data.main.humidity;
  
      output.innerHTML = `
        <strong>${city}</strong><br/>
        Temperature: ${temperature} °C<br/>
        Condition: ${condition}<br/>
        Humidity: ${humidity}%
      `;
    } catch (error) {
      output.innerHTML = "Error: " + error.message;
    }
  }
  