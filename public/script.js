document.getElementById('getWeather').addEventListener('click', async () => {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name!');
    return;
  }

  const response = await fetch(`/api/weather/${city}`);
  const data = await response.json();

  if (data.error) {
    alert(data.error);
    return;
  }

  document.getElementById('weatherInfo').innerHTML = `
    <h2>${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;
});
