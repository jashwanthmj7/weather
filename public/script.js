document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) return alert('Please enter a city name.');

    const weatherInfoDiv = document.getElementById('weatherInfo');
    weatherInfoDiv.classList.remove('show');  // Hide weather info initially for fade-in effect

    try {
        const response = await fetch(`/api/weather/${city}`);  // Assuming backend uses /api/weather/endpoint
        const data = await response.json();

        if (data.error) {
            weatherInfoDiv.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
            weatherInfoDiv.innerHTML = `
                <h3>Weather in ${data.city}</h3>
                <p>Temperature: ${data.temperature}°C</p>
                <p>Description: ${data.description}</p>
                <p>Humidity: ${data.humidity}%</p>
            `;
        }

        // Trigger fade-in animation for the weather info
        weatherInfoDiv.classList.add('show');
    } catch (error) {
        weatherInfoDiv.innerHTML = `<p>An error occurred. Please try again.</p>`;
        weatherInfoDiv.classList.add('show');
    }
});



