document.addEventListener("DOMContentLoaded", async () => {
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');
    const forecastContainer = document.querySelector('#forecast-container');

    const apiKey = "7d4070e062541d741c3b3d0fdff76297";
    const lat = "-25.469920721767352";
    const lon = "-49.3076672916208";

    const urls = {
        currentWeather: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`,
        forecast: `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
    };

    async function fetchData(url) {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    }

    try {
        const currentWeatherData = await fetchData(urls.currentWeather);
        const forecastData = await fetchData(urls.forecast);

        // Display current weather
        currentTemp.innerHTML = `${currentWeatherData.main.temp}&deg;C`;
        const iconSrc = `https://openweathermap.org/img/w/${currentWeatherData.weather[0].icon}.png`;
        const description = currentWeatherData.weather[0].description;
        weatherIcon.setAttribute('src', iconSrc);
        weatherIcon.setAttribute('alt', description);
        captionDesc.textContent = description;

        // Display 3-day forecast
        forecastContainer.innerHTML = '';
        const forecastList = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        forecastList.forEach(forecast => {
            const date = new Date(forecast.dt_txt).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' });
            const temp = forecast.main.temp;
            const desc = forecast.weather[0].description;
            const icon = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;

            const forecastElement = document.createElement('div');
            forecastElement.innerHTML = `
                <h4>${date}</h4>
                <p>${temp}&deg;C</p>
                <img src="${icon}" alt="${desc}">
                <p>${desc}</p>
            `;
            forecastContainer.appendChild(forecastElement);
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});
