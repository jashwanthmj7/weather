document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  const loadingSpinner = document.getElementById('loading');
  const weatherInfoDiv = document.getElementById('weatherInfo');
  
  // Show spinner while loading
  loadingSpinner.style.display = 'block';
  
  try {
    const response = await fetch(`/api/weather/${city}`);
    if (!response.ok) {
      throw new Error("Weather data not found");
    }
    const weatherData = await response.json();
    
    // Hide the spinner after data is fetched
    loadingSpinner.style.display = 'none';

    // Display the weather information
    weatherInfoDiv.style.opacity = 0; // To trigger the fade-in animation
    setTimeout(() => {
      weatherInfoDiv.style.opacity = 1;
      weatherInfoDiv.innerHTML = `
        <h3>Weather in ${city}</h3>
        <p>Temperature: ${weatherData.main.temp}°C</p>
        <p>Weather: ${weatherData.weather[0].description}</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
      `;
    }, 500); // Delay to let the fade-in effect work

  } catch (error) {
    loadingSpinner.style.display = 'none';
    alert("Error: " + error.message);
  }
});


