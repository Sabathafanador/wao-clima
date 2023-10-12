function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '081071e2f0f13e1d34001edc3ca4e301';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }
  
  function displayWeather(data) {
    const weatherResult = document.getElementById('weatherResult');
    weatherResult.style.display = 'block';
  
    const cityName = data.name;
    const temperature = (data.main.temp - 273.15).toFixed(2);
    const description = data.weather[0].description;
    const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    weatherResult.innerHTML = `
      <h2>Clima en ${cityName}</h2>
      <p>Temperatura: ${temperature} °C</p>
      <p>Descripción: ${description}</p>
      <img src="${iconUrl}" alt="Icono de clima">
    `;
  }
  