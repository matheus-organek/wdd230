const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "7d4070e062541d741c3b3d0fdff76297";
const myLat = "-25.469920721767352"; 
const myLong = "-49.3076672916208";

// Usando https:// no início da URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=${myKey}`;

async function apiFetch() {
    try {
        console.log("Fetching data...");
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Data fetched:", data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

apiFetch();

function displayResults(data) {
    console.log("Displaying results...");
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = `${desc}`;
    console.log("Results displayed");
}
