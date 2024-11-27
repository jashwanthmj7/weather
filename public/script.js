document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) return alert('Please enter a city name.');

    try {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        // Use the correct element ID (weatherInfo)
        const weatherInfo = document.getElementById('weatherInfo');
        if (data.error) {
            weatherInfo.innerText = `Error: ${data.error}`;
        } else {
            weatherInfo.innerHTML = `
                <h3>Weather in ${data.city}</h3>
                <p>Temperature: ${data.temperature}°C</p>
                <p>Description: ${data.description}</p>
            `;
        }
    } catch (error) {
        const weatherInfo = document.getElementById('weatherInfo');
        weatherInfo.innerText = 'An error occurred. Please try again.';
    }
});

