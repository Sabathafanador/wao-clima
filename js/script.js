
function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = '081071e2f0f13e1d34001edc3ca4e301';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
        displayAdditionalInfo(data);
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
  
    let temperatureMessage = '';
    if (temperature > 30) {
      temperatureMessage = '¡Vas a sudar como pollo!';
    } else if (temperature < 10) {
      temperatureMessage = 'Hace frío, ve por tu abrigo!!!.';
    } else {
      temperatureMessage = 'La temperatura es moderada.';
    }
  
    const cityInfo = `
      <div>
        <h2>Clima en ${cityName}</h2>
        <p>Temperatura: ${temperature} °C</p>
        <p>Descripción: ${description}</p>
        <p>${temperatureMessage}</p>
        <img src="${iconUrl}" alt="Icono de clima">
      </div>
    `;
  
    weatherResult.innerHTML = cityInfo;
  }
  
  function displayAdditionalInfo(data) {
    const additionalInfo = document.getElementById('additionalInfo');
    additionalInfo.style.display = 'block';
  
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
  
    let windMessage = '';
    if (windSpeed > 10) {
      windMessage = 'Hay viento moderado.';
    } else {
      windMessage = 'El viento es suave.';
    }
  
    const additionalInfoContent = `
      <h3>Información adicional:</h3>
      <p>Humedad: ${humidity}%</p>
      <p>Velocidad del viento: ${windSpeed} m/s</p>
      <p>${windMessage}</p>
    `;
  
    additionalInfo.innerHTML = additionalInfoContent;
  }
  