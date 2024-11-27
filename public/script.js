document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    if (!city) return alert('Please enter a city name.');

    try {
        // Correct fetch URL
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById('weatherResult').innerText = `Error: ${data.error}`;
        } else {
            document.getElementById('weatherResult').innerHTML = `
                <h3>Weather in ${data.city}</h3>
                <p>Temperature: ${data.temperature}°C</p>
                <p>Description: ${data.description}</p>
            `;
        }
    } catch (error) {
        document.getElementById('weatherResult').innerText = 'An error occurred. Please try again.';
    }
});
